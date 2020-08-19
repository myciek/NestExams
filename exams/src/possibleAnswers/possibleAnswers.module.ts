import { Module } from '@nestjs/common';
import { PossibleAnswersService } from './possibleAnswers.service';
import { PossibleAnswersController } from './possibleAnswers.controller';

@Module({
  providers: [PossibleAnswersService],
  controllers: [PossibleAnswersController],
})
export class PossibleAnswersModule {}
