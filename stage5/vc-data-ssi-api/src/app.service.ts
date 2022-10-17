import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { RecipientDto } from './dto/recipient';
import * as crypto from 'crypto';
const storage = [];

@Injectable()
export class AppService {
  addUserData(recipient: RecipientDto) {
    try {
      const id = crypto.randomUUID();
      recipient.id = id;
      storage.push(recipient);
      console.log(storage);
      return id;
    } catch (ex) {
      throw new InternalServerErrorException(ex);
    }
  }

  getUserData(id: string) {
    try {
      return storage.find((user) => user.id === id);
    } catch (ex) {
      throw new InternalServerErrorException(ex);
    }
  }
}
