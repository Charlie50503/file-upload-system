import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from 'src/common/decorator/public.decorator';
import { ApiBadRequestResponse, ApiTags } from '@nestjs/swagger';
import { ResponseDto } from 'src/common/dto/response.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { CustomExceptionDto } from 'src/common/dto/custom-exception.dto';
import { ApiSignUpResponse } from './swagger/auth.decorator';
import { SignInResDto } from './dto/sign-up.res.dto';
@ApiTags('Auth') // swagger tag
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // @HttpCode(HttpStatus.OK)
  // @Public()
  // @Post('login')
  // signIn(@Body() signInDto: SignInDto) {
  //   console.log(process.env.JWT_SECRET);

  //   return this.authService.signIn(signInDto.username, signInDto.password);
  // }

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
  async signUp(
    @Body() createUser: CreateUserDto,
  ): Promise<ResponseDto<SignInResDto>> {
    const data = await this.authService.signUp(createUser);

    return {
      statusCode: 200,
      message: 'success',
      data: data,
    };
  }
}
