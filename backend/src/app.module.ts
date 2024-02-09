import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { FileManagementController } from './controllers/file-management/file-management.controller';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env`],
    }),
  ],
  controllers: [AppController, FileManagementController],
  providers: [AppService],
})
export class AppModule {}
