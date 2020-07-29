/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/users.interface';
import { CreateUserDto } from './dto/users.dto';
@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private UserModel: Model<User>) {}
  async create(CreateUserDto: CreateUserDto): Promise<any> {
    const createdUser = new this.UserModel(CreateUserDto);
    return createdUser.save();
  }
  async findAll(): Promise<any> {
    return await this.UserModel.find().exec();
  }
  async findById(id): Promise<User> {
    const user = await this.UserModel.findById(id).exec();
    return user;
  }
  async find(req): Promise<any> {
    return await this.UserModel.find(req).exec();
  }
  async update(id, CreateUserDto: CreateUserDto): Promise<any> {
    return await this.UserModel.findByIdAndUpdate(id, CreateUserDto, {
      new: true,
    });
  }
  async delete(id): Promise<any> {
    return await this.UserModel.findByIdAndRemove(id);
  }

  async findOne(username: string): Promise<User | undefined> {
    const users = this.UserModel.find().exec();

    return (await users).find(user => user.username === username);
  }
}
