import * as mongoose from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type CredentialContextDocument = mongoose.Document & CredentialContext;

@Schema()
export class CredentialContext {
  @Prop()
  _id: string;

  @Prop()
  name: string;

  @Prop([String])
  contexts: string[];

  @Prop({ type: Object })
  vcInfo: {
    issuer: string;
    types: string[];
  };

  @Prop({ type: Object })
  mappingRulesDescriptor: Record<string, string>;

  @Prop({ type: Object })
  subjectMetadata: Record<string, any>;

  @Prop({ type: Object })
  dataProvider: {
    url: string;
    urlKey: string;
  };
}

export const CredentialContextSchema =
  SchemaFactory.createForClass(CredentialContext);
