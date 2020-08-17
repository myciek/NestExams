import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Exclude } from 'class-transformer';

@Schema()
export class User extends Document {
  @Prop()
  username: string;

  @Exclude()
  password: string;

  @Prop()
  is_teacher: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
