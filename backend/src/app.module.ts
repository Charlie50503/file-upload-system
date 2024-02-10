import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { FileManagementModule } from './modules/file-management/file-management.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { APP_FILTER, APP_GUARD, APP_PIPE } from '@nestjs/core';
import { AuthGuard } from './modules/auth/auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { CustomExceptionFilter } from './common/filters/custom-exception.filter';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env`],
      cache: true,
      isGlobal: true,
    }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRE_DAY },
    }),
    FileManagementModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_FILTER,
      useClass: CustomExceptionFilter,
    },
  ],
})
export class AppModule {}
