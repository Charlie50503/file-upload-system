import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { FileManagementModule } from './modules/file-management/file-management.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env`],
      cache: true,
      isGlobal: true,
    }),
    FileManagementModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
