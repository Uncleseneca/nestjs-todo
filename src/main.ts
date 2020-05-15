import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('booststrap');
  const app = await NestFactory.create(AppModule);
  const port = 3000;
  await app.listen(port);

  logger.log(`App is listening on port ${port}`);
}
bootstrap();
