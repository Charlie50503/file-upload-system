import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, getSchemaPath, ApiExtraModels } from '@nestjs/swagger';
import { ResponseDto } from 'src/common/dto/response.dto';
import { SignInResDto } from '../dto/sign-up.res.dto';
export function ApiSignUpResponse() {
  return applyDecorators(
    ApiExtraModels(ResponseDto, SignInResDto),
    ApiOkResponse({
      description: 'A list of files',
      schema: {
        allOf: [
          { $ref: getSchemaPath(ResponseDto) },
          {
            properties: {
              data: {
                type: 'array',
                items: { $ref: getSchemaPath(SignInResDto) },
              },
            },
          },
        ],
      },
    }),
  );
}
