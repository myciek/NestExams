import {
  Controller,
  Res,
  Query,
  Get,
  HttpStatus,
  Post,
  Body,
  Param,
  NotFoundException,
  Put,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { CreateExerciseDto } from './dto/createExercise.dto';
import { ExerciseDto } from './dto/exercise.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/users/schemas/users.schema';

@UseGuards(JwtAuthGuard)
@Controller('exercises')
export class ExercisesController {
  constructor(private readonly ExerciseService: ExercisesService) {}

  @Post()
  async AddExercise(
    @Res() res,
    @Req() req,
    @Body() CreateExerciceDto: CreateExerciseDto,
  ) {
    CreateExerciseDto['owner'] = <User>req.user;
    const lists = await this.ExerciseService.create(CreateExerciceDto);
    return res.status(HttpStatus.OK).json({
      message: 'Exercise has been created successfully',
      lists,
    });
  }

  @Get()
  async findAll(@Res() res) {
    const lists = await this.ExerciseService.findAll();
    var dtoList = lists.map(function(exercise) {
      return new ExerciseDto(exercise);
    });
    return res.status(HttpStatus.OK).json(dtoList);
  }

  @Get(':id')
  async findById(@Res() res, @Param() params) {
    const lists = await this.ExerciseService.findById(params.id);
    if (!lists) throw new NotFoundException('Exercise does not exist!');
    const exercise = new ExerciseDto(lists);
    return res.status(HttpStatus.OK).json(exercise);
  }
  @Put(':id')
  async update(
    @Res() res,
    @Param() params,
    @Body() CreateExerciseDto: CreateExerciseDto,
  ) {
    const lists = await this.ExerciseService.update(
      params.id,
      CreateExerciseDto,
    );
    if (!lists) throw new NotFoundException('Exercise does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Exercise has been successfully updated',
      lists,
    });
  }
  @Delete(':id')
  async delete(@Res() res, @Param() params) {
    const lists = await this.ExerciseService.delete(params.id);
    if (!lists) throw new NotFoundException('Exercise does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'Exercise deleted.',
      lists,
    });
  }
}
