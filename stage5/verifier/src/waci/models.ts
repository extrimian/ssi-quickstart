export const citizen = {
  id: 'ed7d9b1f-9eed-4bde-b81c-3aa7485cf946',
  media_type: 'application/json',
  format: 'dif/presentation-exchange/definitions@v1.0',
  data: {
    json: {
      options: {
        challenge: '3fa85f64-5717-4562-b3fc-2c963f66afa7',
        domain: '4jt78h47fh47',
      },
      presentation_definition: {
        id: '32f54163-7166-48f1-93d8-ff217bdb0656',
        frame: {
          '@context': [
            'https://www.w3.org/2018/credentials/v1',
            'https://w3id.org/citizenship/v1',
            'https://w3id.org/security/suites/bls12381-2020/v1',
          ],
          type: ['VerifiableCredential', 'CitizenCard'],
          credentialSubject: {
            '@explicit': true,
            type: ['PermanentResident', 'Person', 'PermanentResidentCard'],
            birthDate: {},
            familyName: {},
            givenName: {},
            identifier: {},
            residentSince: {},
          },
        },
        input_descriptors: [
          {
            id: 'citizenship_input',
            name: 'Citizenship Certificate',
            constraints: {
              fields: [
                {
                  path: ['$.credentialSubject.birthDate'],
                  filter: {
                    type: 'string',
                  },
                },
                {
                  path: ['$.credentialSubject.familyName'],
                  filter: {
                    type: 'string',
                  },
                },
                {
                  path: ['$.credentialSubject.givenName'],
                  filter: {
                    type: 'string',
                  },
                },
                {
                  path: ['$.credentialSubject.identifier'],
                  filter: {
                    type: 'string',
                  },
                },
                {
                  path: ['$.credentialSubject.residentSince'],
                  filter: {
                    type: 'string',
                  },
                },
              ],
            },
          },
        ],
      },
    },
  },
};

export const gha = {
  id: 'ed7d9b1f-9eed-4bde-b81c-3aa7485cf947',
  media_type: 'application/json',
  format: 'dif/presentation-exchange/definitions@v1.0',
  data: {
    json: {
      options: {
        challenge: '3fa85f64-5717-4562-b3fc-2c963f66afa7',
        domain: '4jt78h47fh47',
      },
      presentation_definition: {
        id: '32f54163-7166-48f1-93d8-ff217bdb0657',
        frame: {
          '@context': [
            'https://www.w3.org/2018/credentials/v1',
            'https://w3id.org/citizenship/v1',
            'https://w3id.org/security/suites/bls12381-2020/v1',
          ],
          type: ['VerifiableCredential', 'GhaCard'],
          credentialSubject: {
            '@explicit': true,
            type: ['PermanentResident', 'Person', 'PermanentResidentCard'],
            birthDate: {},
            familyName: {},
            givenName: {},
            identifier: {},
            residentSince: {},
          },
        },
        input_descriptors: [
          {
            id: 'citizenship_input',
            name: 'Citizenship Certificate',
            constraints: {
              fields: [
                {
                  path: ['$.credentialSubject.birthDate'],
                  filter: {
                    type: 'string',
                  },
                },
                {
                  path: ['$.credentialSubject.familyName'],
                  filter: {
                    type: 'string',
                  },
                },
                {
                  path: ['$.credentialSubject.givenName'],
                  filter: {
                    type: 'string',
                  },
                },
                {
                  path: ['$.credentialSubject.identifier'],
                  filter: {
                    type: 'string',
                  },
                },
                {
                  path: ['$.credentialSubject.residentSince'],
                  filter: {
                    type: 'string',
                  },
                },
              ],
            },
          },
        ],
      },
    },
  },
};

export const extrimian = {
  id: 'ed7d9b1f-9eed-4bde-b81c-3aa7485cf947',
  media_type: 'application/json',
  format: 'dif/presentation-exchange/definitions@v1.0',
  data: {
    json: {
      options: {
        challenge: '3fa85f64-5717-4562-b3fc-2c963f66afa7',
        domain: '4jt78h47fh47',
      },
      presentation_definition: {
        id: '32f54163-7166-48f1-93d8-ff217bdb0657',
        frame: {
          '@context': [
            'https://json-ld.org/contexts/person.jsonld',
            'https://w3id.org/citizenship/v1',
            'https://w3id.org/security/bbs/v1',
            'https://www.w3.org/2018/credentials/v1',
          ],
          type: ['VerifiableCredential', 'ExtrimianCard'],
          credentialSubject: {
            '@explicit': true,
            type: ['PermanentResident', 'Person'],
            birthDate: {},
            familyName: {},
            givenName: {},
            email: {},
            telephone: {},
            nationality: {},
          },
        },
        input_descriptors: [
          {
            id: 'citizenship_input',
            name: 'Citizenship Certificate',
            constraints: {
              fields: [
                {
                  path: ['$.credentialSubject.birthDate'],
                  filter: {
                    type: 'string',
                  },
                },
                {
                  path: ['$.credentialSubject.familyName'],
                  filter: {
                    type: 'string',
                  },
                },
                {
                  path: ['$.credentialSubject.givenName'],
                  filter: {
                    type: 'string',
                  },
                },
                {
                  path: ['$.credentialSubject.email'],
                  filter: {
                    type: 'string',
                  },
                },
                {
                  path: ['$.credentialSubject.telephone'],
                  filter: {
                    type: 'string',
                  },
                },
                {
                  path: ['$.credentialSubject.nationality.name'],
                  filter: {
                    type: 'string',
                  },
                },
              ],
            },
          },
        ],
      },
    },
  },
};
