// custom-exception.filter.ts
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { CustomExceptionDto } from '../dto/custom-exception.dto';
import { CustomException } from '../exception/custom-exception';

@Catch(CustomException)
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: CustomExceptionDto, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    // 如果 statusCode 為 undefined，則使用 500 作為默認值
    const status = exception.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;
    const { message, errorCode } = exception;

    response.status(status).json({
      statusCode: status,
      message: message,
      errorCode: errorCode,
    });
  }
}
