import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId, Types } from 'mongoose';

export type BodyPartDocument = HydratedDocument<Exercise>;
/**
 * 訓練項目
 *
 * @export
 * @class Exercise
 */
@Schema({
  timestamps: true, // 啟用時間戳記，自動添加 createdAt 和 updatedAt 字段
})
export class Exercise {
  @Prop({ required: true, trim: true })
  exercise_chinese_name: string; // 訓練項目中文名稱
  @Prop({ trim: true, default: '' })
  exercise_english_name: string; // 訓練項目英文名稱
  // @Prop({ required: true, trim: true, unique: true })
  // exercise_code: string; // 訓練項目代號
  description: string; // 訓練項目說明
  @Prop({
    type: [
      {
        type: Types.ObjectId,
        ref: 'MuscleTag',
      },
    ],
  })
  muscle_tags: ObjectId[]; // 訓練項目對應標籤
}

export const UserSchema = SchemaFactory.createForClass(Exercise); // 對應的 schema 並正確命名
