import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import 'reflect-metadata';
import { config } from './config';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(config.PORT);
  Logger.log(`App listening on port ${config.PORT}`);
}

bootstrap();
