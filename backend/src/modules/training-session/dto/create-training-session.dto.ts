import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsInt,
  IsNotEmpty,
  Max,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';
import { IsObjectId } from 'nestjs-object-id';
import { ObjectId } from 'mongodb';
export class CreateTrainingSessionDto {
  @IsObjectId({ message: '請輸入部位代號' })
  @IsNotEmpty({ message: '請輸入部位代號' })
  @ApiProperty({
    description: '部位代號ID',
    example: new ObjectId().toString(),
    type: 'string',
  })
  part_id: ObjectId;
  @IsObjectId({ message: '請輸入訓練項目代號' })
  @IsNotEmpty({ message: '請輸入訓練項目代號' })
  @ApiProperty({
    description: '訓練項目ID',
    example: new ObjectId().toString(),
    type: 'string',
  })
  exercise_id: ObjectId;
  @Type(() => Date) // 轉換日期
  @IsDate({ message: '請輸入訓練日期' })
  @IsNotEmpty({ message: '請輸入訓練日期' })
  @ApiProperty({
    description: '訓練日期',
    example: new Date().toISOString(),
    type: 'string', // 注意這裡應該是 string，因為 JSON 中日期為字符串
  })
  date: Date;
  @IsBoolean({ message: '請輸入是否整組做完完' })
  @IsNotEmpty({ message: '請輸入是否整組做完完' })
  @ApiProperty({
    description: '是否整組做完完',
    example: true,
    type: 'boolean',
  })
  completed: boolean;
  @Max(100, { message: '最多 100 次動作' })
  @Min(1, { message: '最少 1 次動作' })
  @IsInt({ message: '動作次數必須是整數' })
  @IsNotEmpty({ message: '請輸入動作次數' })
  @ApiProperty({
    description: '動作次數',
    example: 10,
    type: 'number',
  })
  reps: number;
  @Max(100, { message: '最多 100 組' })
  @Min(1, { message: '最少輸入 1 組' })
  @IsInt({ message: '組數必須是整數' })
  @IsNotEmpty({ message: '請輸入第幾組' })
  @ApiProperty({
    description: '第幾組',
    example: 1,
    type: 'number',
  })
  sets: number;
  @Max(10, { message: '最多 10 REP' })
  @Min(0, { message: '最少輸入 0 REP' })
  @IsInt({ message: 'REP 品質必須是整數' })
  @IsNotEmpty({ message: '請輸入 REP 品質' })
  @ApiProperty({
    description: 'REP 品質 1~10 分',
    example: 10,
    type: 'number',
  })
  rep: number;
}
