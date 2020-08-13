import { User } from '../schemas/users.schema';
import { Exclude } from 'class-transformer';

export class UserDto {
  constructor(private readonly User: User) {}

  @Exclude()
  password: string;

  readonly username: string;
  readonly is_teacher: boolean;
}
