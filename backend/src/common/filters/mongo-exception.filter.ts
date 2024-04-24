// custom-exception.filter.ts
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { MongoServerError } from 'mongoose/node_modules/mongodb';

@Catch(MongoServerError)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoServerError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    if (exception.code === 11000) {
      response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: '唯一值欄位出現無法重複', // 自定義的錯誤訊息
        error: 'Bad Request',
      });
    } else {
      // 其他 MongoDB 錯誤可以在這裡處理或轉發
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: '內部服務器錯誤',
        error: 'Internal Server Error',
      });
    }
    // response.status(status).json({
    //   statusCode: status,
    //   errorMessage: errorMessage,
    //   errorCode: errorCode,
    // });
  }
}
