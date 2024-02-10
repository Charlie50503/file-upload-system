import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignInDto {
  @IsString({ message: '請輸入email' })
  @IsNotEmpty({ message: '請輸入email' })
  @IsEmail({}, { message: '請輸入正確的email格式' })
  @ApiProperty({
    description: 'email',
    example: 'email',
    type: 'string',
  })
  email: string;
  @IsString({ message: '請輸入密碼' })
  @IsNotEmpty({ message: '請輸入密碼' })
  @MinLength(6, { message: '密碼長度至少為 6' })
  @ApiProperty({
    description: '密碼',
    example: 'password',
    type: 'string',
  })
  password: string;
}
