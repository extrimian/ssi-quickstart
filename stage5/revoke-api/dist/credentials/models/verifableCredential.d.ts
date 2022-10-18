export declare const VerifableCredentialModel: {
    contexts: string[];
    vcInfo: {
        issuer: string;
        expirationDate: string;
        id: string;
        types: string[];
        credentialStatus: {
            id: string;
            type: string;
        };
    };
    data: {
        type: string;
        batchNumber: string;
        administeringCentre: string;
        healthProfessional: string;
        countryOfVaccination: string;
        recipient: {
            type: string;
            givenName: string;
            familyName: string;
            gender: string;
            birthDate: string;
        };
        vaccine: {
            type: string;
            disease: string;
            atcCode: string;
            medicinalProductName: string;
            marketingAuthorizationHolder: string;
        };
    };
    vcResponse: string;
};
export interface VCInfoModel {
    issuer: string;
    expirationDate: string;
    identifier: string;
    types: string[];
    credentialStatus: VCSatus;
}
export interface VCSatus {
    id: string;
    type: string;
}
export interface VCData {
    type: string;
    batchNumber: string;
    administeringCentre: string;
    healthProfessional: string;
    countryOfVaccination: string;
    recipient: VCRecipient;
    vaccine: Vaccine;
}
export interface VCRecipient {
    type: string;
    givenName: string;
    familyName: string;
    gender: string;
    birthDate: string;
}
export interface Vaccine {
    type: string;
    disease: string;
    atcCode: string;
    medicinalProductName: string;
    marketingAuthorizationHolder: string;
}
