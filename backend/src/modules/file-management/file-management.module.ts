import { Module } from '@nestjs/common';
import { FileManagementController } from './file-management.controller';
import { FirebaseStorageService } from './firebase-storage.service';
@Module({
  imports: [],
  controllers: [FileManagementController],
  providers: [FirebaseStorageService],
})
export class FileManagementModule {}
