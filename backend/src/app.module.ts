import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { FileManagementModule } from './modules/file-management/file-management.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { APP_FILTER, APP_GUARD, APP_PIPE } from '@nestjs/core';
import { AuthGuard } from './modules/auth/auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomExceptionFilter } from './common/filters/custom-exception.filter';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.${process.env.NODE_ENV}`],
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
    // 檔案管理 table
    MongooseModule.forRoot(process.env.FILE_MANAGEMENT_MONGODB_URL, {
      connectionName: 'fileManagement',
      authSource: 'admin',
      connectionFactory: (connection) => {
        connection.on('connected', () => {
          console.log('連線 fileManagement mongodb 成功');
        });
        connection._events.connected();
        return connection;
      },
    }),
    // 健身記錄管理 table
    MongooseModule.forRoot(process.env.WORK_OUT_MONGODB_URL, {
      connectionName: 'workOut',
      authSource: 'admin',
      connectionFactory: (connection) => {
        connection.on('connected', () => {
          console.log('連線 workOut mongodb 成功');
        });
        connection._events.connected();
        return connection;
      },
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_FILTER,
      useClass: CustomExceptionFilter,
    },
  ],
})
export class AppModule {}
