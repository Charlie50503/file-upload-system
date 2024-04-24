import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { ObjectId } from 'mongodb';

export class CreateExerciseDto {
  @IsString({ message: '請輸入訓練項目中文名稱' })
  @IsNotEmpty({ message: '請輸入訓練項目中文名稱' })
  @ApiProperty({
    description: '訓練項目中文名稱',
    example: '划船',
    type: 'string',
  })
  exercise_chinese_name: string;
  @IsString({ message: '請輸入訓練項目英文名稱' })
  @IsNotEmpty({ message: '請輸入訓練項目英文名稱' })
  @ApiProperty({
    description: '訓練項目英文名稱',
    example: 'crunches',
    type: 'string',
  })
  exercise_english_name: string;
  @IsString({ message: '請輸入訓練項目描述' })
  @IsNotEmpty({ message: '請輸入訓練項目描述' })
  @ApiProperty({
    description: '訓練項目描述',
    example: 'crunches',
    type: 'string',
  })
  description: string;
  @IsArray({ message: '請輸入標籤' })
  @IsNotEmpty({ message: '請輸入標籤' })
  @ApiProperty({
    description: '訓練項目標籤',
    example: [],
    type: 'array',
  })
  muscle_tags: ObjectId[];
}
