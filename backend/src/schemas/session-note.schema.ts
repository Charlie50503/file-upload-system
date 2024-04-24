import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BodyPartDocument = HydratedDocument<SessionNote>;

/**
 * 心得紀錄
 *
 * @export
 * @class SessionNote
 */
@Schema({
  timestamps: true, // 啟用時間戳記，自動添加 createdAt 和 updatedAt 字段
})
export class SessionNote {
  @Prop({ required: true, trim: true })
  note: string; // 心得
  @Prop({ required: true })
  record_date: Date; // 紀錄日期
}

export const UserSchema = SchemaFactory.createForClass(SessionNote); // 對應的 schema 並正確命名
