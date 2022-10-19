import { WACIInterpreter, Actor } from '@extrimian/waci';
import axios from 'axios';
import { VCVerifierService } from '@extrimian/vc-verifier';
import { RESOLVER_URL } from '../config';
import { citizen, gha, extrimian } from './models';
import DidResolverService, { didResolver } from '../dwn-client/didResolver';
export let data = '';

const waciInterpreter = new WACIInterpreter({
  pack: async (message: any): Promise<any> => message,
  unpack: async (message: any): Promise<any> => message,
}).setUpFor(
  {
    getPresentationDefinition: (): any => {
      return [extrimian];
    },
    verifyCredential: async (credential: any): Promise<boolean> => {
      console.log('Credential', JSON.stringify(credential, null, 2));

      const vcVerifierService = new VCVerifierService({
        didDocumentResolver: didResolver.resolveDid,
      });

      const verifier = await vcVerifierService.verify(credential, {
        name: 'assertionMethod',
      });

      console.log('verifiers', JSON.stringify(verifier, null, 2));

      return verifier.result;
    },
  },
  Actor.Verifier
);

export default waciInterpreter;
