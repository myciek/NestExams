import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://user:123qwe@ds249355.mlab.com:49355/heroku_4tr7dmc2'), UsersModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
