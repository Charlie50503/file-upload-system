import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({
  timestamps: true,
})
export class User {
  @Prop({ required: true, trim: true })
  name: string;
  @Prop({ required: true, trim: true, minlength: 6, select: false })
  password: string;
  @Prop({
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    select: false,
  })
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
