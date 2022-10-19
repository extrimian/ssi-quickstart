export interface RevokedCredentialModel {
  id: string;
  description: string;
  verifiableCredential: RevokedModel[];
}

export interface RevokedModel {
  claim: ClaimModel;
  issuer: string;
  issued: Date;
  proof: any;
}

export interface ClaimModel {
  id: string;
  currentStatus: string;
  statusReason: string;
}