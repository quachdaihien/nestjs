import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { ConfigModule } from '@nestjs/config';
import { ConfigModuleDynamic } from './config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './dto/user.entity';

@Module({
  imports: [
    // @ts-ignore
    ConfigModule.forRoot(),
    // @ts-ignore
    ConfigModuleDynamic.register({ folder: './config' }),
    UserModule,
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3000,
    //   username: 'root',
    //   password: 'root',
    //   database: 'test',
    //   entities: [User],
    //   synchronize: true,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
