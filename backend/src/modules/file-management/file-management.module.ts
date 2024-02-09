import { Module } from '@nestjs/common';
import { FileManagementController } from 'src/modules/file-management/file-management.controller';
import { FirebaseStorageService } from 'src/modules/file-management/firebase-storage.service';
@Module({
  imports: [],
  controllers: [FileManagementController],
  providers: [FirebaseStorageService],
})
export class FileManagementModule {}
