import axios from 'axios';
import { RESOLVER_URL } from '../config';

export default class DidResolverService {
  async resolveDid(did: string) {
    const resolverURL = RESOLVER_URL;
    const didIdentifier = did.slice(did.lastIndexOf(':') + 1);
    const { data: didDocument } = await axios.get(resolverURL + didIdentifier);
    return didDocument;
  }

  async getDwnUrlFromDocument(didDocument: any) {
    try {
      const dwn = didDocument.service.find(
        (service: any) => service.type === 'DecentralizedWebNode'
      );
      return dwn.serviceEndpoint.nodes[0];
    } catch (error) {
      console.error(error);
      throw Error('Error finding DWN service in DID Document');
    }
  }
}

export const didResolver = new DidResolverService();
