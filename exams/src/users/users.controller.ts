import { Controller, Res, Query, Get, HttpStatus, Post, Body, Param, NotFoundException, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiQuery } from '@nestjs/swagger';
import { CreateUserDto } from './dto/users.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly UsersService: UsersService) { }

    @Post('/create')
    async AddUser(@Res() res, @Body() CreateUserDto: CreateUserDto) {
        const lists = await this.UsersService.create(CreateUserDto);
        return res.status(HttpStatus.OK).json({
            message: "Post has been created successfully",
            lists
        })
    }

    @Get('id')
    async findById(@Res() res, @Query('id') id: string) {
        const lists = await this.UsersService.findById(id);
        if (!lists) throw new NotFoundException('Id does not exist!');
        return res.status(HttpStatus.OK).json(lists);
    }
    @Put('/update')
    async update(@Res() res, @Query('id') id: string, @Body() CreateUserDto: CreateUserDto) {
        const lists = await this.UsersService.update(id, CreateUserDto);
        if (!lists) throw new NotFoundException('Id does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Post has been successfully updated',
            lists
        });
    }
    @Delete('/delete')
    async delete(@Res() res, @Query('id') id: string) {
        const lists = await this.UsersService.delete(id);
        if (!lists) throw new NotFoundException('Post does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Post has been deleted',
            lists
        })
    }
}
