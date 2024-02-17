import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'debug', 'verbose', 'error', 'warn'], // 加上這一行設定
  });

  const config = new DocumentBuilder()
    .setTitle('File Management API')
    .setDescription('提供檔案上傳下載功能')
    .setVersion('1.0')
    // 设置全局安全方案
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        in: 'header',
      },
      'JWT-auth', // 这个是一个标识符，可以随意命名
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  await app.listen(parseInt(process.env.PORT, 10) || 3000);
}
bootstrap();
