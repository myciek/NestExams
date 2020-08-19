import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateExerciseDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  readonly text: string;
  readonly written_exercise: boolean;
  @IsNotEmpty()
  readonly max_points: number;
}
