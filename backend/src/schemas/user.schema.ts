import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;
  @Prop()
  password: string;
  @Prop({ required: true })
  email: string;
  @Prop()
  createAt: Date;
  @Prop()
  updateAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
