import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserModule } from './users/user.module';
import { ValidationPipe } from './validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
