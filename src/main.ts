import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserModule } from './users/user.module';
import { RolesGuard } from './guard/role.guard.base';
import { LoggingInterceptor } from './interceptor/logging.interceptor';
import { ValidationPipe } from './validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe());
  // add guard global
  // app.useGlobalGuards(new RolesGuard());
  // app.useGlobalInterceptors(new LoggingInterceptor());
  await app.listen(3000);
}
bootstrap();
