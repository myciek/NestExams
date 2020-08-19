import { Injectable } from '@nestjs/common';
import { Exercise } from './schemas/exercises.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateExerciseDto } from './dto/createExercise.dto';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectModel(Exercise.name) private exerciseModel: Model<Exercise>,
  ) {}

  async create(CreateExerciseDto: CreateExerciseDto): Promise<any> {
    const createdExercise = new this.exerciseModel(CreateExerciseDto);
    return createdExercise.save();
  }

  async findAll(): Promise<any> {
    return await this.exerciseModel.find().exec();
  }

  async findById(id): Promise<Exercise> {
    const user = await this.exerciseModel.findById(id).exec();
    return user;
  }

  async find(req): Promise<any> {
    return await this.exerciseModel.find(req).exec();
  }

  async update(id, CreateExerciseDto: CreateExerciseDto): Promise<any> {
    return await this.exerciseModel.findByIdAndUpdate(id, CreateExerciseDto, {
      new: true,
    });
  }

  async delete(id): Promise<any> {
    return await this.exerciseModel.findByIdAndRemove(id);
  }
}
