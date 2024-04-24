import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMuscleTagDto {
  @IsString({ message: '請輸入標籤名稱' })
  @IsNotEmpty({ message: '請輸入標籤名稱' })
  @ApiProperty({
    description: '標籤名稱',
    example: '腹肌',
    type: 'string',
  })
  tag_name: string;
}
