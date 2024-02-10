import { HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from 'src/common/services/token.service';
import { ErrorCode } from 'src/common/enum/error-code.enum';
import { CustomException } from 'src/common/exception/custom-exception';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { SignInResDto } from './dto/sign-up.res.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private tokenService: TokenService,
  ) {}

  // async signIn(
  //   username: string,
  //   pass: string,
  // ): Promise<{ access_token: string }> {
  //   const user = await this.usersService.findOne(username);
  //   if (user?.password !== pass) {
  //     throw new UnauthorizedException();
  //   }
  //   const payload = { id: user., username: user.username };
  //   return {
  //     access_token: await this.jwtService.signAsync(payload),
  //   };
  // }

  async signUp(createUser: CreateUserDto): Promise<SignInResDto> {
    const sameUser = await this.usersService.findOneByEmail(createUser.email);

    if (sameUser) {
      throw new CustomException(
        HttpStatus.BAD_REQUEST,
        '用戶已經存在',
        ErrorCode.USER_EXIST,
      );
    }
    const createdUser = await this.usersService.create(createUser);

    return {
      ...createdUser.toJSON(),
      token: await this.tokenService.generatorToken(
        createdUser.email,
        createdUser.password,
      ),
    };
  }
}
