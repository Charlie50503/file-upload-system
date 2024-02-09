import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, getSchemaPath, ApiExtraModels } from '@nestjs/swagger';
import { ResponseDto } from 'src/common/dto/response.dto';
import { IFile } from '../dto/file.dto';

export function ApiGetFilesResponse() {
  return applyDecorators(
    ApiExtraModels(ResponseDto, IFile),
    ApiOkResponse({
      description: 'A list of files',
      schema: {
        allOf: [
          { $ref: getSchemaPath(ResponseDto) },
          {
            properties: {
              data: {
                type: 'array',
                items: { $ref: getSchemaPath(IFile) },
              },
            },
          },
        ],
      },
    }),
  );
}
