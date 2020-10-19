import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'digitalpaco',
      password: 'Ocap_5791',
      database: 'dp_cms',
      entities: [__dirname + '../**/**/*entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      logger: 'file'
    }),
    GraphQLModule.forRoot({
    autoSchemaFile: true
  }),
  UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
