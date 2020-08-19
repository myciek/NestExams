import { Exercise } from '../schemas/exercises.schema';
import { Exclude } from 'class-transformer';

export class ExerciseDto {
  constructor(private readonly Exercise: Exercise) {}
}
