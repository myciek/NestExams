import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/users.interface';
import { CreateUserDto } from './dto/users.dto';
@Injectable()
export class UsersService {
    constructor(@InjectModel('User') public UserModel: Model<User>) { }
    async create(CreateUserDto: CreateUserDto): Promise<any> {
        const createdUser = new this.UserModel(CreateUserDto);
        return createdUser.save();
    }
    async findAll(): Promise<any> {
        return await this.UserModel.find().exec();
    }
    async findById(id): Promise<User> {
        const customer = await this.UserModel.findById(id).exec();
        return customer;
    }
    async find(req): Promise<any> {
        return await this.UserModel.find(req).exec();
    }
    async update(id, CreateUserDto: CreateUserDto): Promise<any> {
        return await this.UserModel.findByIdAndUpdate(id, CreateUserDto, { new: true });
    }
    async delete(id): Promise<any> {
        return await this.UserModel.findByIdAndRemove(id);
    }

}