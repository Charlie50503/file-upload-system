import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from 'src/common/services/token.service';
import { ErrorCode } from 'src/common/enum/error-code.enum';
import { CustomException } from 'src/common/exception/custom-exception';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { SignUpResDto } from './dto/sign-up.res.dto';
import { SignInResDto } from './dto/sign-in.res.dto';
import { BcryptService } from 'src/common/services/bcrypt.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private tokenService: TokenService,
    private bcryptService: BcryptService,
  ) {}

  async signIn(email: string, password: string): Promise<SignInResDto> {
    const user = await this.usersService.findOneByEmailIncludePassword(email);
    if (!user) {
      throw new NotFoundException();
    }
    const isPasswordMatch = this.bcryptService.comparePassword(
      password,
      user.password,
    );

    if (!isPasswordMatch) {
      throw new CustomException(
        HttpStatus.BAD_REQUEST,
        '密碼錯誤',
        ErrorCode.PASSWORD_NOT_MATCH,
      );
    }

    delete user.password;
    return {
      ...user.toJSON(),
      token: await this.tokenService.generatorToken(user.id, user.email),
    };
  }

  async signUp(createUser: CreateUserDto): Promise<SignUpResDto> {
    const sameUser = await this.usersService.findOneByEmail(createUser.email);

    if (sameUser) {
      throw new CustomException(
        HttpStatus.BAD_REQUEST,
        '用戶已經存在',
        ErrorCode.USER_EXIST,
      );
    }

    const hashedPassword = await this.bcryptService.hashPassword(
      createUser.password,
    );
    createUser.password = hashedPassword;
    const createdUser = await this.usersService.create(createUser);

    return {
      ...createdUser.toJSON(),
      token: await this.tokenService.generatorToken(
        createdUser.id,
        createdUser.email,
      ),
    };
  }
}
