export const requestPresentation = {
  type: "https://didcomm.org/present-proof/3.0/request-presentation",
  id: "0ac534c8-98ed-4fe3-8a41-3600775e1e92",
  thid: "95e63a5f-73e1-46ac-b269-48bb22591bfa",
  from: "did:example:verifier",
  to: ["did:example:prover"],
  body: {},
  attachments: [
    {
      id: "ed7d9b1f-9eed-4bde-b81c-3aa7485cf947",
      media_type: "application/json",
      format: "dif/presentation-exchange/definitions@v1.0",
      data: {
        json: {
          options: {
            challenge: "3fa85f64-5717-4562-b3fc-2c963f66afa7",
            domain: "4jt78h47fh47",
          },
          presentation_definition: {
            id: "32f54163-7166-48f1-93d8-ff217bdb0654",
            frame: {
              "@context": [
                "https://www.w3.org/2018/credentials/v1",
                "https://w3id.org/vaccination/v1",
                "https://w3id.org/security/suites/bls12381-2020/v1",
              ],
              type: ["VerifiableCredential", "VaccinationCertificate"],
              credentialSubject: {
                "@explicit": true,
                type: ["VaccinationEvent"],
                batchNumber: {},
                countryOfVaccination: {},
              },
            },
            input_descriptors: [
              {
                id: "vaccination_input",
                name: "Vaccination Certificate",
                constraints: {
                  fields: [
                    {
                      path: [
                        "$.credentialSchema.id",
                        "$.vc.credentialSchema.id",
                      ],
                      filter: {
                        type: "string",
                        const:
                          "https://w3id.org/vaccination/#VaccinationCertificate",
                      },
                    },
                    {
                      path: ["$.credentialSubject.batchNumber"],
                      filter: {
                        type: "string",
                      },
                    },
                    {
                      path: ["$.credentialSubject.countryOfVaccination"],
                      filter: {
                        type: "string",
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      },
    },
  ],
};
