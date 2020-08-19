import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Exercise extends Document {
  @Prop()
  name: string;

  @Prop()
  text: string;

  @Prop()
  owner: [{ type: mongoose.Schema.Types.ObjectId; ref: 'User' }];

  @Prop({ default: false })
  written_exercise: boolean;

  @Prop()
  max_points: number;
}

export const ExerciseSchema = SchemaFactory.createForClass(Exercise);
