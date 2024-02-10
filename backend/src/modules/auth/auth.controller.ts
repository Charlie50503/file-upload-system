import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from 'src/common/decorator/public.decorator';
import { ApiBadRequestResponse, ApiTags } from '@nestjs/swagger';
import { ResponseDto } from 'src/common/dto/response.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { CustomExceptionDto } from 'src/common/dto/custom-exception.dto';
import { ApiSignUpResponse } from './swagger/auth.decorator';
import { SignUpResDto } from './dto/sign-up.res.dto';
import { SignInDto } from './dto/sign-in.dto';
import { SignInResDto } from './dto/sign-in.res.dto';
@ApiTags('Auth') // swagger tag
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @ApiBadRequestResponse({
    description: 'Invalid email or password',
    type: CustomExceptionDto,
  })
  @Public()
  @Post('login')
  public async signIn(
    @Body() signInDto: SignInDto,
  ): Promise<ResponseDto<SignInResDto>> {
    const data = await this.authService.signIn(
      signInDto.email,
      signInDto.password,
    );

    return {
      statusCode: 200,
      message: 'success',
      data: data,
    };
  }

  // @ApiBearerAuth('JWT-auth')
  // @Get('profile')
  // getProfile(@Request() req) {
  //   return req.user;
  // }

  @Post('sign-up')
  @Public()
  @ApiBadRequestResponse({
    description: 'User already exists',
    type: CustomExceptionDto,
  })
  @ApiSignUpResponse()
  public async signUp(
    @Body() createUser: CreateUserDto,
  ): Promise<ResponseDto<SignUpResDto>> {
    const data = await this.authService.signUp(createUser);

    return {
      statusCode: 200,
      message: 'success',
      data: data,
    };
  }
}
