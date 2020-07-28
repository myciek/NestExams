import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
@ApiProperty()
readonly text: string;
}