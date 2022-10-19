export const VerifableCredentialModel =  {
  contexts: [
    "https://w3id.org/security/v2",
    "https://w3id.org/security/bbs/v1",    
    "https://w3id.org/vaccination/v1"],
  vcInfo: {
    issuer: "did:key:z6MkiY62766b1LJkExWMsM3QG4WtX7QpY823dxoYzr9qZvJ3",
    expirationDate: "2026/05/05",
    id: "",
    types: ["VerifiableCredential","VaccinationCertificate"],
    credentialStatus: {
      id: "",
      type: "CredentialStatusList2017"
    },  
  },
  data: {
    type: "VaccinationEvent",
    batchNumber: "1183738569",
    administeringCentre: "MoH",
    healthProfessional: "MoH",
    countryOfVaccination: "NZ",
    recipient: {
      type: "VaccineRecipient",
      givenName: "",
      familyName: "",
      gender: "",
      birthDate: ""
    },
    vaccine: {
      type: "Vaccine",
      disease: "COVID-19",
      atcCode: "J07BX03",
      medicinalProductName: "COVID-19 Vaccine Moderna",
      marketingAuthorizationHolder: "Moderna Biotech"
    }
  },
  vcResponse: ""
}

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