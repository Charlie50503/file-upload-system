import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { TokenService } from 'src/common/services/token.service';
import { BcryptService } from 'src/common/services/bcrypt.service';

@Module({
  imports: [UsersModule],
  providers: [AuthService, TokenService, BcryptService],
  controllers: [AuthController],
})
export class AuthModule {}
