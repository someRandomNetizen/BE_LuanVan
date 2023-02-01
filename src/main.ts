import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {


  const app = await NestFactory.create(AppModule, { cors: true });
  //await app.listen(3000);
  const port: number = parseInt(`${process.env.SERVER_PORT}`) || 3001;
  await app.listen(port);
//await app.listen(process.env.PORT || 5000);
//await app.listen(5000);
//5000
}
bootstrap();
