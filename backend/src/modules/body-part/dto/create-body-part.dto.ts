import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBodyPartDto {
  @IsString({ message: '請輸入訓練部位中文名稱' })
  @IsNotEmpty({ message: '請輸入訓練部位中文名稱' })
  @ApiProperty({
    description: '訓練部位中文名稱',
    example: '背',
    type: 'string',
  })
  part_chinese_name: string;
  @IsString({ message: '請輸入訓練部位英文名稱' })
  @IsNotEmpty({ message: '請輸入訓練部位英文名稱' })
  @ApiProperty({
    description: '訓練部位英文名稱',
    example: 'back',
    type: 'string',
  })
  part_english_name: string;
}
