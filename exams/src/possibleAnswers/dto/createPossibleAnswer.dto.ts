import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreatePossibleAnswerDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly key: string;
  @IsNotEmpty()
  readonly value: string;
  @IsNotEmpty()
  readonly exercise: string;
  readonly correct: boolean;
}
