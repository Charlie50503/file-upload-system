import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { MulterExceptionFilter } from 'src/exception/multer-exception.filter';
@ApiTags('File Management') // swagger tag
@Controller('file-management')
export class FileManagementController {
  // @@filename()
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      limits: {
        fileSize: 1024 * 1024 * 10, // 10MB
      },
    }),
  )
  @UseFilters(MulterExceptionFilter) // 套用 error handler
  async upload(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    // 在這裡你可以訪問 file 物件，進行後續處理，例如儲存文件資訊到資料庫
    // 返回響應給客戶端
    return {
      message: 'File uploaded successfully',
      fileInfo: {
        originalname: file.originalname,
        mimetype: file.mimetype,
        size: file.size,
      },
    };
  }
  @Get('download')
  download() {
    return 'test123';
  }
}
