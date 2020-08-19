import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Exclude } from 'class-transformer';

@Schema()
export class PossibleAnswer extends mongoose.Document {
  @Prop()
  key: string;

  @Prop()
  value: string;

  @Prop()
  exercise: [
    {
      type: mongoose.Schema.Types.ObjectId;
      ref: 'Exercise';
    },
  ];

  @Exclude()
  @Prop({ default: false })
  correct: boolean;
}

export const UserSchema = SchemaFactory.createForClass(PossibleAnswer);
