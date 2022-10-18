import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type CredentialDocument = mongoose.Document & Credential;

@Schema()
export class Credential {
  @Prop([String])
  '@context': string[];
  @Prop([String])
  type: string[];
  @Prop()
  id: string;
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop({ type: Object })
  credentialSubject: any;
  @Prop({ type: Object })
  credentialStatus: any;
  @Prop({ type: Object })
  refreshService: any;
  @Prop({ type: Object })
  credentialSchema: any;
  @Prop()
  expirationDate: Date;
  @Prop()
  issuanceDate: Date;
  @Prop()
  issuer: string;
  @Prop({ type: Object })
  proof: any;
}

export const CredentialSchema = SchemaFactory.createForClass(Credential);
