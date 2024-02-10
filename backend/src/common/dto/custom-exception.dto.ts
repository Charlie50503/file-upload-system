import { ApiProperty } from '@nestjs/swagger';

// custom-exception.interface.ts
export class CustomExceptionDto {
  @ApiProperty({
    description: 'status code',
    example: '404',
  })
  statusCode: number;
  @ApiProperty({
    description: 'errorMessage',
    example: 'errorMessage',
  })
  errorMessage: string;
  @ApiProperty({
    description: 'error code',
    example: '001',
  })
  errorCode: string;
}
