import { Did } from '@extrimian/did-registry';
import { CREATE_URL, DWN_URL } from '../config';
import { storageMock } from './storage';

export const createDid = async (): Promise<string> => {
  console.log(CREATE_URL);
  const { canonicalId } = await new Did().create(
    CREATE_URL,
    {} as any,
    storageMock,
    [
      {
        id: 'dwn',
        type: 'DecentralizedWebNode',
        serviceEndpoint: {
          nodes: [DWN_URL],
        },
      },
    ]
  );
  if (!canonicalId) {
    throw Error('did creation failed');
  }
  return canonicalId;
};
