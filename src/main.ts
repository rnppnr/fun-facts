import { NestFactory } from '@nestjs/core';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerCustomOptions,
} from '@nestjs/swagger';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const CSS_URL =
    'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css';

  const config = new DocumentBuilder()
    .setTitle('Fun Facts API')
    .setDescription('Retrieves fun facts')
    .setVersion('1.0')
    .addServer('https://')
    .build();

  const options: SwaggerCustomOptions = {
    customCssUrl: CSS_URL,
  };

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, options);

  await app.listen(3000);
}
bootstrap();
