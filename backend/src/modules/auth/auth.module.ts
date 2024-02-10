import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { TokenService } from 'src/common/services/token.service';

@Module({
  imports: [UsersModule],
  providers: [AuthService, TokenService],
  controllers: [AuthController],
})
export class AuthModule {}
