import * as mongoose from 'mongoose';
export const UsersSchema = new mongoose.Schema({
  username: String,
  password: String,
  is_teacher: Boolean,
});
