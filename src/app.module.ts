import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { CatModule } from './cat/cat.module';
import { LazyModule, LazyService } from './lazy.module';
import { ConfigModule } from '@nestjs/config';
import { ConfigModuleDynamic } from './config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './dto/user.entity';
import { LazyModuleLoader } from '@nestjs/core';
import { GlobalModule } from './global.module';

@Module({
  imports: [
    GlobalModule,
    LazyModule,
    // @ts-ignore
    ConfigModule.forRoot(),
    // @ts-ignore
    ConfigModuleDynamic.register({ folder: './config' }),
    UserModule,
    CatModule,
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
export class AppModule {
  constructor(public loader: LazyModuleLoader) {}

  async onApplicationBootstrap() {
    console.log('Lazy loading module...');
    const a = await this.loader.load(() => LazyModule);
    const lazyService = a.get(LazyService);
    lazyService.getHello()
  }  
}
