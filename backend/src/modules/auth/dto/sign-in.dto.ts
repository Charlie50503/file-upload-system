import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty({
    description: '帳號',
    example: 'username',
    type: 'string',
  })
  username: string;
  @ApiProperty({
    description: '密碼',
    example: 'password',
    type: 'string',
  })
  password: string;
}
