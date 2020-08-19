import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from './auth/auth.module';
import { ExercisesController } from './exercises/exercises.controller';
import { ExercisesModule } from './exercises/exercises.module';
import { PossibleAnswersModule } from './possibleAnswers/possibleAnswers.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB),
    UsersModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    AuthModule,
    ExercisesModule,
    PossibleAnswersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
