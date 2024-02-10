import { ApiProperty } from '@nestjs/swagger';

// custom-exception.interface.ts
export class CustomExceptionDto {
  @ApiProperty({
    description: 'status code',
    example: '404',
  })
  statusCode: number;
  @ApiProperty({
    description: 'message',
    example: 'message',
  })
  message: string;
  @ApiProperty({
    description: 'error code',
    example: '001',
  })
  errorCode: string;
}
