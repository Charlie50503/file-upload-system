import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { Type } from 'class-transformer';
export class CreateSessionNoteDto {
  @IsString({ message: '請輸入訓練心得' })
  @IsNotEmpty({ message: '請輸入訓練心得' })
  @ApiProperty({
    description: '訓練心得',
    example: '今天訓練深蹲, 感覺下背不舒服',
    type: 'string',
  })
  note: string;
  @Type(() => Date) // 轉換日期
  @IsDate({ message: '請輸入訓練日期' })
  @IsNotEmpty({ message: '請輸入訓練日期' })
  @ApiProperty({
    description: '訓練日期',
    example: new Date().toISOString(),
    type: 'string', // 注意這裡應該是 string，因為 JSON 中日期為字符串
  })
  record_date: Date;
}
