import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Res,
  UploadedFile,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ResponseDto } from 'src/common/dto/response.dto';
import { MulterExceptionFilter } from 'src/common/filters/multer-exception.filter';
import { FirebaseStorageService } from 'src/modules/file-management/firebase-storage.service';
import { IFile } from './dto/file.dto';
import { ApiGetFilesResponse } from '../swagger/file-management.decorator';
import { Response } from 'express';

@ApiTags('File Management') // swagger tag
@Controller('file-management')
export class FileManagementController {
  constructor(private firebaseStorage: FirebaseStorageService) {}
  @Post('file')
  @UseInterceptors(
    FileInterceptor('file', {
      limits: {
        fileSize: 1024 * 1024 * 10, // 10MB
      },
    }),
  )
  @UseFilters(MulterExceptionFilter) // 套用 error handler
  async upload(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<ResponseDto<string>> {
    const fileName = await this.firebaseStorage.uploadFile(file);
    return {
      statusCode: 200,
      message: 'success',
      data: fileName,
    };
  }
  @Get('file/:fileName')
  @ApiOkResponse({
    description: 'Download file',
    // type: Response,
    content: {
      'application/octet-stream': {
        schema: { type: 'string', format: 'binary' },
      },
    },
  })
  async download(@Param('fileName') fileName: string, @Res() res: Response) {
    try {
      const { stream } = await this.firebaseStorage.downloadFile(fileName);
      // 設置正確的Content-Type
      res.setHeader('Content-Type', 'application/octet-stream'); // 修改這裡
      res.setHeader(
        'Content-Disposition',
        `attachment; filename="${fileName}"`, // 修改這裡
      );

      // 將文件流直接傳輸給客戶端
      return stream.pipe(res);
    } catch (error) {
      if (error.message === 'File not found') {
        // throw new NotFoundException(error.message);
        res.status(404).send({
          statusCode: 404,
          message: error.message,
          error: 'File not found',
        });
      }
      // throw error; // 或更具體的錯誤處理
      res.status(500).send({
        statusCode: 500,
        message: error.message,
        error: 'Internal Server Error',
      });
    }
  }

  @Get('files')
  @ApiGetFilesResponse()
  async getFiles(): Promise<ResponseDto<IFile[]>> {
    const files = await this.firebaseStorage.getFiles();
    return {
      statusCode: 200,
      message: 'success',
      data: files,
    };
  }

  @Delete('file')
  async delete(
    @Query('fileName') fileName: string,
  ): Promise<ResponseDto<null>> {
    await this.firebaseStorage.deleteFile(fileName);
    return {
      statusCode: 200,
      message: 'success',
      data: null,
    };
  }
}
