/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './schemas/users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(CreateUserDto: CreateUserDto): Promise<any> {
    const createdUser = new this.userModel(CreateUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<any> {
    return await this.userModel.find().exec();
  }

  async findById(id): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    return user;
  }

  async find(req): Promise<any> {
    return await this.userModel.find(req).exec();
  }

  async update(id, CreateUserDto: CreateUserDto): Promise<any> {
    return await this.userModel.findByIdAndUpdate(id, CreateUserDto, {
      new: true,
    });
  }

  async delete(id): Promise<any> {
    return await this.userModel.findByIdAndRemove(id);
  }

  async findOne(username: string): Promise<User | undefined> {
    const users = this.userModel.find().exec();

    return (await users).find(user => user.username === username);
  }
}
