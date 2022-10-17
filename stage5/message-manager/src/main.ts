import { config } from './config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DidService } from './did.service';

async function bootstrap() {
  const did = await DidService.getDid();
  const app = await NestFactory.create(AppModule.register(did));
  await app.listen(config.PORT);
}
bootstrap();
