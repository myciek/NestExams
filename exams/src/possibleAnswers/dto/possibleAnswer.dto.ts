import { PossibleAnswer } from '../schemas/possible-answer.schema';
import { Exclude } from 'class-transformer';

export class PossibleAnswerDto {
  constructor(private readonly PossibleAnswer: PossibleAnswer) {}

  readonly key: string;
  readonly value: string;
  readonly exercise: string;
}
