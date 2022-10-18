import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CredentialsModule } from './credentials/credentials.module';
import { config } from './config';
@Module({
  imports: [CredentialsModule, MongooseModule.forRoot(config.MONGO_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
