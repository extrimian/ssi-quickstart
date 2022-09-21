import { AssertionMethodPurpuse } from "@extrimian/did-core";
import { DIDModenaResolver } from "@extrimian/did-resolver";
import { KMSClient } from "@extrimian/kms-client";
import { LANG, Suite } from "@extrimian/kms-core";
import { VerifiableCredentialService } from "@extrimian/vc-core";
import { VCVerifierService } from "@extrimian/vc-verifier";
import { SecureStorage } from "../secure-storage";

export const singInvalidBbsbls2 = async () => {
    const vcService = new VerifiableCredentialService();

    const credential = await vcService.createCredential({
        context: ["https://w3id.org/vaccination/v1",
            "https://w3id.org/security/v2",
            "https://w3id.org/security/bbs/v1"],
        vcInfo: {
            "issuer": "did:modena:matic:EiBir9q1nNlEmNFs1APYAsWbdVMnDVp0Wy1MWYLQPcSFuw",
            expirationDate: new Date("2026/05/05"),
            id: "123456789",
            types: ["VaccinationCertificate"],
        },
        data: {
            type: "VaccinationEvent",
            batchNumber: "1183738569",
            administeringCentre: "MoH",
            healthProfessional: "MoH",
            countryOfVaccination: "NZ",
            recipient: {
                type: "VaccineRecipient",
                givenName: "JOHN",
                familyName: "SMITH",
                gender: "Male",
                birthDate: "1958-07-17"
            },
            vaccine: {
                type: "Vaccine",
                disease: "COVID-19",
                atcCode: "J07BX03",
                medicinalProductName: "COVID-19 Vaccine Moderna",
                marketingAuthorizationHolder: "Moderna Biotech"
            }
        },
        mappingRules: null,
    });

    const kms = new KMSClient({
        lang: LANG.es,
        storage: new SecureStorage(),
    });

    const bbsbls2020 = await kms.getPublicKeysBySuiteType(Suite.Bbsbls2020);

    const vc = await kms.signVC(Suite.Bbsbls2020,
        bbsbls2020[0],
        credential,
        "did:modena:matic:EiDxVyreUxU_nBYhtifpAXC7PcgMJ3DLkl_1Vdxy0Izg0w",
        "did:modena:matic:EiDxVyreUxU_nBYhtifpAXC7PcgMJ3DLkl_1Vdxy0Izg0w#bbsbls-2", new AssertionMethodPurpuse());

    const service = new VCVerifierService({
        didDocumentResolver: async (did: string) => {
            const resolver = new DIDModenaResolver({
                modenaURL: "http://modena.extrimian.com"
            });

            const didDocument = await resolver.resolveDID(did.substring(did.lastIndexOf(":") + 1));
            return didDocument;
        }
    });

    const result = await service.verify(vc, new AssertionMethodPurpuse());

    console.log(result);
}