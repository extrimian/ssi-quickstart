import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type UserInvitationDocument = mongoose.Document & UserInvitation;

@Schema()
export class UserInvitation {
  @Prop()
  userId: string;

  @Prop()
  waciInvitationId: string;

  @Prop([String])
  credentialContextIds: string[];
}

export const UserInvitationSchema =
  SchemaFactory.createForClass(UserInvitation);
