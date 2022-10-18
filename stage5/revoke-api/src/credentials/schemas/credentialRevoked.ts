import mongoose from 'mongoose';
import { Document } from 'mongoose';

export const CredentialRevokedSchema = new mongoose.Schema({
  id: String,
  description: String,
  verifiableCredential: [
    {
      claim: {
        id: String,
        currentStatus: String,
        statusReason: String,
      },
      issuer: String,
      issued: Date,
      proof: {}
    }
  ]  
});

export class CredentialRevokedDocument extends Document {
  id: string;
  description: string;
  verifiableCredential: [
    {
      claim: {
        id: String,
        currentStatus: String,
        statusReason: String,
      },
      issuer: String,
      issued: Date,
      proof: {}
    }
  ]
}
