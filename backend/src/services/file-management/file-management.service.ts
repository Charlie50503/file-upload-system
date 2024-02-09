import { Injectable } from '@nestjs/common';

@Injectable()
export class FileManagementService {
  upload() {}
  download() {
    return 'test';
  }
}
