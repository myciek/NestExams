import { Module } from '@nestjs/common';
import { PossibleAnswersService } from './possible-answers.service';
import { PossibleAnswersController } from './possible-answers.controller';

@Module({
  providers: [PossibleAnswersService],
  controllers: [PossibleAnswersController]
})
export class PossibleAnswersModule {}
