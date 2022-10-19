import { Did } from '@extrimian/did-registry';
import { config } from './config';
import { didStorage } from './storage/did-storage';

export class DidService {
  static async getDid(): Promise<string> {
    let did = await didStorage.getDid();
    if (!did) {
      const { canonicalId } = await new Did().create(
        config.CREATE_DID_API_URL,
        {},
        didStorage,
        [
          {
            id: 'dwn',
            type: 'DecentralizedWebNode',
            serviceEndpoint: {
              nodes: [config.DWN_URL],
            },
          },
        ],
      );
      if (!canonicalId) throw new Error('Did creation failed');
      did = canonicalId;
      await didStorage.saveDid(did);
    }
    return did;
  }
}
