import { Module } from '@nestjs/common';
import { UserModule } from '@headless-digitalpaco/user'
import { DatabaseModule } from '@headless-digitalpaco/database'
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    DatabaseModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
