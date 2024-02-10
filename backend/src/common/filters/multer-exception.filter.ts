import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ErrorCode } from '../enum/error-code.enum';

@Catch()
export class MulterExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    console.log(exception);

    if (exception.message === 'File too large') {
      response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        errorMessage: '檔案不可以超過 10MB',
        errorCode: ErrorCode.FILE_OVERSIZE,
      });
    } else {
      // 对于不是由 Multer 引起的其他异常，可以根据需要进行处理
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        errorMessage: 'Internal Server Error',
        errorCode: ErrorCode.INTERNAL_SERVER_ERROR,
      });
    }
  }
}
