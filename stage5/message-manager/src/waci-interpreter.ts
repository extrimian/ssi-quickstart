import crypto from 'crypto';
import { Actor, WACIInterpreter } from '@extrimian/waci';
import axios from 'axios';
import { config } from './config';
import { VcDataDto } from './dto/vc-data.dto';
import { Provider } from '@nestjs/common';
import { CredentialService } from './credential.service';

export const waciInterpreterProvider: Provider = {
  provide: WACIInterpreter,
  useFactory: async (did: string, credentialService: CredentialService) =>
    new WACIInterpreter({
      pack: async (input: any) => input,
      unpack: async (input: string) => input,
    }).setUpFor<Actor.Issuer>(
      {
        getCredentialManifest: async (waciInvitationId: string) => {
          const { data: vcData } = await axios.get<VcDataDto[]>(
            `${config.VC_DATA_API_URL}/${waciInvitationId}`,
          );
          const uuid = crypto.randomUUID();
          const expirationDate = new Date();
          expirationDate.setFullYear(2023);
          const vc1 = await credentialService.createCredential({
            ...vcData[0],
            vcInfo: {
              expirationDate,
              id: uuid,
              ...vcData[0].vcInfo,
              credentialStatus: {
                id: `${config.VC_STATUS_API_URL}/${uuid}`,
                type: 'CredentialStatusList2017',
              },
            },
          });

          const manifestId = crypto.randomUUID();
          return [
            {
              manifest: {
                id: crypto.randomUUID(),
                media_type: 'application/json',
                format: 'dif/credential-manifest/manifest@v1.0',
                data: {
                  json: {
                    options: {
                      challenge: crypto.randomUUID(),
                      domain: '9rf25a28rs96',
                    },
                    credential_manifest: {
                      id: manifestId,
                      version: '0.1.0',
                      issuer: {
                        id: did,
                        name: 'Random Country',
                      },
                      output_descriptors: [
                        {
                          id: 'citizen_card_output',
                          schema: '',
                          display: {
                            title: {
                              path: ['$.name', '$.vc.name'],
                              fallback: 'Random Country Citizen Card',
                            },
                            subtitle: {
                              path: ['$.class', '$.vc.class'],
                              fallback: 'Verifiable Credential',
                            },
                            description: {
                              text: `Card which acknowledges holder's Random Country citizenship.`,
                            },
                          },
                        },
                      ],
                    },
                  },
                },
              },
              fulfillment: {
                id: crypto.randomUUID(),
                media_type: 'application/json',
                format: 'dif/credential-manifest/fulfillment@v1.0',
                data: {
                  json: {
                    '@context': [
                      'https://www.w3.org/2018/credentials/v1',
                      'https://identity.foundation/credential-manifest/fulfillment/v1',
                    ],
                    type: ['VerifiablePresentation', 'CredentialFulfillment'],
                    credential_fulfillment: {
                      id: crypto.randomUUID(),
                      manifest_id: manifestId,
                      descriptor_map: [
                        {
                          id: 'citizen_card_output',
                          format: 'ldp_vc',
                          path: '$.verifiableCredential[0]',
                        },
                      ],
                    },
                    verifiableCredential: [vc1],
                  },
                },
              },
            },
          ];
        },
        signCredential: (credentialToSign: any) =>
          credentialService.signCredential(credentialToSign),
        verifyCredential: async () => true,
        handleIssuanceAck: async (status: any) => console.log(status),
      },
      Actor.Issuer,
    ),
  inject: ['DID', CredentialService],
};
