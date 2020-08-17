/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
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
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Post()
  async AddUser(@Res() res, @Body() CreateUserDto: CreateUserDto) {
    const lists = await this.UsersService.create(CreateUserDto);
    return res.status(HttpStatus.OK).json({
      message: 'User has been created successfully',
      lists,
    });
  }

  @Get()
  async findAll(@Res() res) {
    const lists = await this.UsersService.findAll();
    var dtoList = lists.map(function(user) {
      return new UserDto(user);
    });
    return res.status(HttpStatus.OK).json(dtoList);
  }

  @Get(':id')
  async findById(@Res() res, @Param() params) {
    const lists = await this.UsersService.findById(params.id);
    if (!lists) throw new NotFoundException('User does not exist!');
    const user = new UserDto(lists);
    return res.status(HttpStatus.OK).json(user);
  }
  @Put(':id')
  async update(
    @Res() res,
    @Param() params,
    @Body() CreateUserDto: CreateUserDto,
  ) {
    const lists = await this.UsersService.update(params.id, CreateUserDto);
    if (!lists) throw new NotFoundException('User does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'User has been successfully updated',
      lists,
    });
  }
  @Delete(':id')
  async delete(@Res() res, @Param() params) {
    const lists = await this.UsersService.delete(params.id);
    if (!lists) throw new NotFoundException('User does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'User deleted.',
      lists,
    });
  }
}
