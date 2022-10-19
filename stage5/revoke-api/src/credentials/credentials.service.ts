import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RevokedCredentialDto } from './dto/revokedCredential';
import {
  RevokedCredentialModel,
  RevokedModel,
} from './models/revokedCredential';
import { CredentialDocument } from './schemas/credential';
import { CredentialRevokedDocument } from './schemas/credentialRevoked';
import { config } from '../config';

@Injectable()
export class CredentialsService {
  constructor(
    @InjectModel('revoked-vcs')
    private credentialRevokedModel: Model<CredentialRevokedDocument>,
    @InjectModel('credentials')
    private credentialModel: Model<CredentialDocument>,
  ) {}

  async revoke(vcId: string, vc: RevokedCredentialDto) {
    this.validateCurrentStatus(vc.currentStatus);
    const revokedCredential = await this.getRevokedCredential(vcId);
    const newRevokedCredential = await this.generateRevokedCredential(
      vcId,
      vc,
      revokedCredential,
    );

    if (!revokedCredential) {
      try {
        await this.credentialRevokedModel.create(newRevokedCredential);

        return newRevokedCredential;
      } catch (ex) {
        throw new InternalServerErrorException(ex);
      }
    } else {
      try {
        await this.credentialRevokedModel.updateOne(
          { id: revokedCredential.id },
          { verifiableCredential: newRevokedCredential.verifiableCredential },
        );

        return newRevokedCredential;
      } catch (ex) {
        throw new InternalServerErrorException(ex);
      }
    }
  }

  async verifyCredential(vcId: string) {
    return await this.getRevokedCredential(vcId);
  }

  async getRevokedCredential(id: string) {
    const statusId = `${config.API_URL}/status/${id}`;
    const result: RevokedCredentialModel =
      await this.credentialRevokedModel.findOne({ id: statusId });
    return result;
  }

  async generateRevokedCredential(
    id: string,
    revokedCredentialDto: RevokedCredentialDto,
    revokedCredentialModel: RevokedCredentialModel | null,
  ) {
    const newVerifiableCredential: RevokedModel = {
      claim: {
        id: `${config.API_URL}/credentials/${id}`,
        currentStatus: revokedCredentialDto.currentStatus,
        statusReason: revokedCredentialDto.statusReason,
      },
      issuer: config.ISSUER,
      issued: new Date(),
      proof: {},
    };

    const verifableCredentials: RevokedModel[] = revokedCredentialModel
      ? revokedCredentialModel.verifiableCredential
      : [];
    verifableCredentials.push(newVerifiableCredential);

    const newRevokedCredential: RevokedCredentialModel = {
      id: `${config.API_URL}/status/${id}`,
      description: config.CREDENTIAL_DESCRIPTION,
      verifiableCredential: verifableCredentials,
    };

    return newRevokedCredential;
  }

  private validateCurrentStatus(currentStatus: string) {
    if (currentStatus !== 'Revoked' && currentStatus !== 'Suspended') {
      throw new BadRequestException(
        'invalid currentStatus, it will be Revoked or Suspended',
      );
    }
  }

  async getCredentials() {
    try {
      return await this.credentialModel.find();
    } catch (ex) {
      throw new InternalServerErrorException(ex);
    }
  }

  async getCredentialById(id: string) {
    try {
      return await this.credentialModel.findOne({ id: id });
    } catch (ex) {
      throw new InternalServerErrorException(ex);
    }
  }
}
