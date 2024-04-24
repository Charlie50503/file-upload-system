import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BodyPartDocument = HydratedDocument<MuscleTag>;

/**
 * 訓練項目標籤
 *
 * @export
 * @class MuscleTag
 */
@Schema({
  timestamps: true, // 啟用時間戳記，自動添加 createdAt 和 updatedAt 字段
})
export class MuscleTag {
  @Prop({ required: true, trim: true, unique: true, lowercase: true })
  tag_name: string; // 訓練項目名稱
}

export const MuscleTagSchema = SchemaFactory.createForClass(MuscleTag); // 對應的 schema 並正確命名
