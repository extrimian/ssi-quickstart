import { DIDDocument } from '@extrimian/did-resolver/dist/models/did-document';
import { DIDModenaResolver } from '@extrimian/did-resolver';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DidResolverService {
  constructor(private didResolver: DIDModenaResolver) {}
  async resolve(did: string): Promise<DIDDocument> {
    const didIdentifier = did.slice(did.lastIndexOf(':') + 1);
    return this.didResolver.resolveDID(didIdentifier);
  }
}
