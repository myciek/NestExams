import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_DB), ConfigModule.forRoot(), UsersModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
