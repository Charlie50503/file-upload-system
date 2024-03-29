import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, getSchemaPath, ApiExtraModels } from '@nestjs/swagger';
import { ResponseDto } from 'src/common/dto/response.dto';
import { SignUpResDto } from '../dto/sign-up.res.dto';
import { SignInResDto } from '../dto/sign-in.res.dto';
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
                $ref: getSchemaPath(SignInResDto),
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
    ApiExtraModels(ResponseDto, SignInResDto),
    ApiOkResponse({
      description: '登入成功 response data',
      schema: {
        allOf: [
          { $ref: getSchemaPath(ResponseDto) },
          {
            properties: {
              data: {
                $ref: getSchemaPath(SignInResDto),
              },
            },
          },
        ],
      },
    }),
  );
}
