export let VCModel = {
  contexts: ["https://w3id.org/vaccination/v1"],
  vcInfo: {
    issuer: "didz6MkiY62766b1LJkExWMsM3QG4WtX7QpY823dxoYzr9qZvJ3",
    expirationDate: "2026/05/05",
    identifier: "123456789",
    types: [ "VaccinationCertificate"],
    credentialStatus: {
        id: "https://example.edu/status/24",
        type: "CredentialStatusList2017"
    }
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
  }
}