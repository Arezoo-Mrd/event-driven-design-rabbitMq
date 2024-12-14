import { INestMicroservice } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app: INestMicroservice = await NestFactory.createMicroservice(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'main_queue',
        queueOptions: {
          durable: false,
        },
      },
    },
  );

  // const config = new DocumentBuilder()
  //   .setTitle('Even Driven Design RabbitMQ-Admin')
  //   .setDescription('Even Driven Design RabbitMQ-Admin')
  //   .setVersion('1.0')
  //   .addTag('')
  //   .build();
  // const documentFactory = () => SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api', app, documentFactory);
  app.listen();
}
bootstrap();
