import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const corsOptions = {
    origin: 'http://localhost:3000', // 허용할 도메인 설정
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization,x-jwt',
    credentials: true,
  };

  const app = await NestFactory.create(AppModule, { cors: corsOptions });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(9000);
}
bootstrap();
