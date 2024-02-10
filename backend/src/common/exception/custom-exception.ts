// same-email.exception.ts
import { HttpStatus, HttpException } from '@nestjs/common';
import { CustomExceptionDto } from '../dto/custom-exception.dto';

export class CustomException
  extends HttpException
  implements CustomExceptionDto
{
  constructor(statusCode: HttpStatus, errorMessage: string, errorCode: string) {
    super(errorMessage, statusCode);
    this.errorCode = errorCode;
    this.statusCode = statusCode;
    this.errorMessage = errorMessage;
  }
  errorMessage: string;
  statusCode: number;
  errorCode: string;
}
