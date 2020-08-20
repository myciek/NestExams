import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Exclude } from 'class-transformer';

@Schema()
export class User extends Document {
  @Prop({ unique: true })
  username: string;
  @Prop()
  password: string;

  @Prop()
  is_teacher: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
