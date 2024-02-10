// common/dto/response.dto.ts

import { ApiProperty } from '@nestjs/swagger';

export class ResponseDto<T> {
  @ApiProperty({
    description: '狀態碼',
    example: 200,
  })
  statusCode: number;
  @ApiProperty({
    description: '訊息',
    example: 'success',
  })
  message: string;
  @ApiProperty({
    description: '資料',
    example: 'data',
    type: 'object',
  })
  data?: T;
  @ApiProperty({
    description: '錯誤訊息',
    example: 'error',
  })
  error?: string;
}
