import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, ObjectId, Types } from 'mongoose';

export type TrainingSessionDocument = HydratedDocument<TrainingSession>;

/**
 * 訓練紀錄
 *
 * @export
 * @class TrainingSession
 */
@Schema({
  timestamps: true, // 啟用時間戳記，自動添加 createdAt 和 updatedAt 字段
})
export class TrainingSession {
  @Prop({
    type: Types.ObjectId,
    ref: 'BodyPart',
    required: true,
  })
  part_id: ObjectId; // 部位代號，參考部位表
  @Prop({
    type: Types.ObjectId,
    ref: 'Exercise',
    required: true,
  })
  exercise_id: ObjectId; // 訓練項目代號，參考訓練項目表
  @Prop({ required: true, trim: true })
  date: Date; // 訓練日期
  @Prop({ required: true })
  completed: boolean; // 是否做完
  @Prop({ required: true, min: 0 })
  reps: number; // 動作次數
  @Prop({ required: true, min: 0 })
  sets: number; // 動作組數
  @Prop({ required: true, min: 0, max: 10 })
  rep: number; // REP 品質
}

export const TrainingSessionSchema =
  SchemaFactory.createForClass(TrainingSession); // 對應的 schema 並正確命名
