import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BodyPartDocument = HydratedDocument<BodyPart>;

/**
 * 訓練部位
 *
 * @export
 * @class BodyPart
 */
@Schema({
  timestamps: true, // 啟用時間戳記，自動添加 createdAt 和 updatedAt 字段
})
export class BodyPart {
  @Prop({ required: true, trim: true })
  part_chinese_name: string; // 部位中文名稱
  @Prop({ trim: true, default: '' })
  exercise_english_name: string; // 部位英文名稱
  // @Prop({ required: true, trim: true, unique: true })
  // part_code: string; // 部位代號，設為唯一
}

export const BodyPartSchema = SchemaFactory.createForClass(BodyPart); // 對應的 schema 並正確命名
