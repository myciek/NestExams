import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly username: string;
  @IsNotEmpty()
  readonly password: string;
  @IsNotEmpty()
  readonly is_teacher: boolean;
}
