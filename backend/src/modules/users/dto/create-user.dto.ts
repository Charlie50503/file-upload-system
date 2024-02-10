import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: '帳號',
    example: 'username',
    type: 'string',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty({
    description: '密碼',
    example: 'password',
    type: 'string',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
  @ApiProperty({
    description: 'email',
    example: 'email',
    type: 'string',
  })
  email: string;
}
