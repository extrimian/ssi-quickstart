import { VerifiableCredentialService } from "@extrimian/vc-core";
import { VCVerifierService } from "@extrimian/vc-verifier";
import { KMSClient } from "@extrimian/kms-client";
import { LANG, Suite } from "@extrimian/kms-core";
import { SecureStorage, SecureStorageMap } from "./secure-storage";
import { AssertionMethodPurpuse, AuthenticationPurpose, KeyAgreementPurpose } from "@extrimian/did-core";
import { DIDModenaResolver } from "@extrimian/did-resolver";
import axios from "axios";

const index = async () => {

    const kms = new KMSClient({
        lang: LANG.es,
        storage: new SecureStorage(),
    });

    // const suite = await kms.create(Suite.Bbsbls2020);


    const vcService = new VerifiableCredentialService();
    const credential = await vcService.createCredential({
        context: ["https://w3id.org/vaccination/v1",
            "https://w3id.org/security/v2",
            "https://w3id.org/security/bbs/v1"],
        vcInfo: {
            "issuer": "did:key:z6MkiY62766b1LJkExWMsM3QG4WtX7QpY823dxoYzr9qZvJ3",
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
    // const vcToSign = await axios.get("https://run.mocky.io/v3/57acba02-3d56-4719-a560-a4bc32a7c8e8");

    const bbsbls2020 = await kms.getPublicKeysBySuiteType(Suite.Bbsbls2020);
    // did:modena:matic:EiAtR0UlH8GE803xvvOMrv79guyASjLOfclMxR9GlIYcog
    const vc = await kms.signVC(Suite.Bbsbls2020,
        bbsbls2020[0],
        credential,
        "did:modena:rsk:EiBWEkGSnY8QUKBYjdz_XXDdyymbFaDdCNU6121szLr29g",
        "did:modena:rsk:EiBWEkGSnY8QUKBYjdz_XXDdyymbFaDdCNU6121szLr29g#bbsbls", new AssertionMethodPurpuse());

    const service = new VCVerifierService({
        didDocumentResolver: async (did: string) => {
            const resolver = new DIDModenaResolver({
                modenaURL: "http://localhost:3001"
            });

            const didDocument = await resolver.resolveDID(did.substring(did.lastIndexOf(":") + 1));
            return didDocument;
        }
    });

    const result = await service.verify(vc, new AssertionMethodPurpuse());

    console.log(result);


}

index();