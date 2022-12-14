export const presentation = [
  {
    type: "https://didcomm.org/present-proof/3.0/presentation",
    id: "f1ca8245-ab2d-4d9c-8d7d-94bf310314ef",
    thid: "95e63a5f-73e1-46ac-b269-48bb22591bfa",
    from: "did:example:prover",
    to: ["did:example:verifier"],
    body: {},
    attachments: [
      {
        id: "2a3f1c4c-623c-44e6-b159-179048c51260",
        media_type: "application/ld+json",
        format: "dif/presentation-exchange/submission@v1.0",
        data: {
          json: {
            "@context": [
              "https://www.w3.org/2018/credentials/v1",
              "https://identity.foundation/presentation-exchange/submission/v1",
            ],
            type: ["VerifiablePresentation", "PresentationSubmission"],
            holder: "did:example:123",
            verifiableCredential: [
              {
                "@context": [
                  "https://www.w3.org/2018/credentials/v1",
                  "https://w3id.org/vaccination/v1",
                  "https://w3id.org/security/bbs/v1",
                ],
                id: "urn:uvci:af5vshde843jf831j128fj",
                type: ["VerifiableCredential", "VaccinationCertificate"],
                description: "COVID-19 Vaccination Certificate",
                name: "COVID-19 Vaccination Certificate",
                expirationDate: "2029-12-03T12:19:52Z",
                issuanceDate: "2019-12-03T12:19:52Z",
                issuer: "did:example:456",
                credentialSubject: {
                  id: "urn:bnid:_:c14n2",
                  type: "VaccinationEvent",
                  batchNumber: "1183738569",
                  countryOfVaccination: "NZ",
                },
                proof: {
                  type: "BbsBlsSignatureProof2020",
                  created: "2021-02-18T23:04:28Z",
                  nonce:
                    "JNGovx4GGoi341v/YCTcZq7aLWtBtz8UhoxEeCxZFevEGzfh94WUSg8Ly/q+2jLqzzY=",
                  proofPurpose: "assertionMethod",
                  proofValue:
                    "AB0GQA//jbDwMgaIIJeqP3fRyMYi6WDGhk0JlGJc/sk4ycuYGmyN7CbO4bA7yhIW/YQbHEkOgeMy0QM+usBgZad8x5FRePxfo4v1dSzAbJwWjx87G9F1lAIRgijlD4sYni1LhSo6svptDUmIrCAOwS2raV3G02mVejbwltMOo4+cyKcGlj9CzfjCgCuS1SqAxveDiMKGAAAAdJJF1pO6hBUGkebu/SMmiFafVdLvFgpMFUFEHTvElUQhwNSp6vxJp6Rs7pOVc9zHqAAAAAI7TJuDCf7ramzTo+syb7Njf6ExD11UKNcChaeblzegRBIkg3HoWgwR0hhd4z4D5/obSjGPKpGuD+1DoyTZhC/wqOjUZ03J1EtryZrC+y1DD14b4+khQVLgOBJ9+uvshrGDbu8+7anGezOa+qWT0FopAAAAEG6p07ghODpi8DVeDQyPwMY/iu2Lh7x3JShWniQrewY2GbsACBYOPlkNNm/qSExPRMe2X7UPpdsxpUDwqbObye4EXfAabgKd9gCmj2PNdvcOQAi5rIuJSGa4Vj7AtKoW/2vpmboPoOu4IEM1YviupomCKOzhjEuOof2/y5Adfb8JUVidWqf9Ye/HtxnzTu0HbaXL7jbwsMNn5wYfZuzpmVQgEXss2KePMSkHcfScAQNglnI90YgugHGuU+/DQcfMoA0+JviFcJy13yERAueVuzrDemzc+wJaEuNDn8UiTjAdVhLcgnHqUai+4F6ONbCfH2B3ohB3hSiGB6C7hDnEyXFOO9BijCTHrxPv3yKWNkks+3JfY28m+3NO0e2tlyH71yDX0+F6U388/bvWod/u5s3MpaCibTZEYoAc4sm4jW03HFYMmvYBuWOY6rGGOgIrXxQjx98D0macJJR7Hkh7KJhMkwvtyI4MaTPJsdJGfv8I+RFROxtRM7RcFpa4J5wF/wQnpyorqchwo6xAOKYFqCqKvI9B6Y7Da7/0iOiWsjs8a4zDiYynfYavnz6SdxCMpHLgplEQlnntqCb8C3qly2s5Ko3PGWu4M8Dlfcn4TT8YenkJDJicA91nlLaE8TJbBgsvgyT+zlTsRSXlFzQc+3KfWoODKZIZqTBaRZMft3S/",
                  verificationMethod: "did:example:123#key-1",
                },
              },
            ],
            presentation_submission: {
              id: "1d257c50-454f-4c96-a273-c5368e01fe63",
              definition_id: "32f54163-7166-48f1-93d8-ff217bdb0654",
              descriptor_map: [
                {
                  id: "vaccination_input",
                  format: "ldp_vp",
                  path: "$.verifiableCredential[0]",
                },
              ],
            },
            proof: {
              type: "Ed25519Signature2018",
              verificationMethod: "did:example:123#key-0",
              created: "2021-05-14T20:16:29.565377",
              proofPurpose: "authentication",
              challenge: "3fa85f64-5717-4562-b3fc-2c963f66afa7",
              jws: "eyJhbGciOiAiRWREU0EiLCAiYjY0IjogZmFsc2UsICJjcml0IjogWyJiNjQiXX0..7M9LwdJR1_SQayHIWVHF5eSSRhbVsrjQHKUrfRhRRrlbuKlggm8mm_4EI_kTPeBpalQWiGiyCb_0OWFPtn2wAQ",
            },
          },
        },
      },
    ],
  },
];
