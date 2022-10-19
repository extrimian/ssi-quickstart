import mongoose from 'mongoose';
import { Document } from 'mongoose';

export const CredentialSchema = new mongoose.Schema(
  {
    '@context': [String],
    id: String,
    type: [String],
    issuer: String,
    name: String,
    description: String,
    issuanceDate: Date,
    expirationDate: Date,
    credentialStatus: Object,
    credentialSubject: Object,
    refreshService: Object,
    credentialSchema: Object,
    proof: Object,
  },
  { typeKey: '$type' },
);

export class CredentialDocument extends Document {
  '@context'?: string[];
  id: string;
  type: string[];
  issuer: string;
  name: string;
  description: string;
  issuanceDate: Date;
  expirationDate?: Date;
  credentialStatus?: Object;
  credentialSubject: Object;
  refreshService?: Object;
  credentialSchema?: Object;
  proof?: Object;
}
