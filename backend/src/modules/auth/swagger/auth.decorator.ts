import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, getSchemaPath, ApiExtraModels } from '@nestjs/swagger';
import { ResponseDto } from 'src/common/dto/response.dto';
import { SignUpResDto } from '../dto/sign-up.res.dto';
export function ApiSignUpResponse() {
  return applyDecorators(
    ApiExtraModels(ResponseDto, SignUpResDto),
    ApiOkResponse({
      description: '註冊成功 response data',
      schema: {
        allOf: [
          { $ref: getSchemaPath(ResponseDto) },
          {
            properties: {
              data: {
                type: 'object',
                items: { $ref: getSchemaPath(SignUpResDto) },
              },
            },
          },
        ],
      },
    }),
  );
}

export function ApiSignInResponse() {
  return applyDecorators(
    ApiExtraModels(ResponseDto, SignUpResDto),
    ApiOkResponse({
      description: '登入成功 response data',
      schema: {
        allOf: [
          { $ref: getSchemaPath(ResponseDto) },
          {
            properties: {
              data: {
                type: 'object',
                items: { $ref: getSchemaPath(SignUpResDto) },
              },
            },
          },
        ],
      },
    }),
  );
}
