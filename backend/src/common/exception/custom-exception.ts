// same-email.exception.ts
import { HttpStatus, HttpException } from '@nestjs/common';
import { CustomExceptionDto } from '../dto/custom-exception.dto';

export class CustomException
  extends HttpException
  implements CustomExceptionDto
{
  constructor(statusCode: HttpStatus, message: string, errorCode: string) {
    super(message, statusCode);
    this.errorCode = errorCode;
    this.statusCode = statusCode;
  }
  statusCode: number;
  errorCode: string;
}
