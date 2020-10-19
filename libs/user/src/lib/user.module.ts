import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { configuration } from './config/configuration';
import { validationSchema } from './config/validation'
import { UsersModule } from './users/users.module';
import { DatabaseModule } from '@headless-digitalpaco/database'


@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema
    }),
    DatabaseModule,
    UsersModule
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class UserModule {}
