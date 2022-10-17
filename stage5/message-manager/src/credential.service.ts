import {
  VerifiableCredential,
  VerifiableCredentialService,
} from '@extrimian/vc-core';
import { Suite } from '@extrimian/kms-core';
import { AssertionMethodPurpuse } from '@extrimian/did-resolver/dist/models/purposes';
import { CreateCredentialParams } from './message.service';
import { KMSClient } from '@extrimian/kms-client';
import { Inject } from '@nestjs/common';

export class CredentialService {
  constructor(
    @Inject('DID') private did: string,
    private vcService: VerifiableCredentialService,
    private kmsClient: KMSClient,
  ) {}

  async createCredential(
    params: CreateCredentialParams,
  ): Promise<VerifiableCredential> {
    return this.vcService.createCredential({
      vcInfo: params.vcInfo as any,
      data: params.data,
      mappingRules: params.mappingRulesDescriptor,
      context: params.contexts,
    });
  }

  async signCredential(
    credentialToSign: VerifiableCredential,
  ): Promise<VerifiableCredential> {
    const keys = await this.kmsClient.getPublicKeysBySuiteType(
      Suite.Bbsbls2020,
    );

    return this.kmsClient.signVC(
      Suite.Bbsbls2020,
      keys[0],
      credentialToSign,
      this.did,
      `${this.did}#vc-bbs`,
      new AssertionMethodPurpuse(),
    );
  }
}
