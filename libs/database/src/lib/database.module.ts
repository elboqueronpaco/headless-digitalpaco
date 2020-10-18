import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
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
      entities: [__dirname + './**/**/*entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      logger: 'file'
    }),
    UserModule
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class DatabaseModule {}
