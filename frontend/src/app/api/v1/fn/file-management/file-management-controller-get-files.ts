/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { IFile } from '../../models/i-file';
import { ResponseDto } from '../../models/response-dto';

export interface FileManagementControllerGetFiles$Params {
}

export function fileManagementControllerGetFiles(http: HttpClient, rootUrl: string, params?: FileManagementControllerGetFiles$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseDto & {
'data'?: Array<IFile>;
}>> {
  const rb = new RequestBuilder(rootUrl, fileManagementControllerGetFiles.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ResponseDto & {
      'data'?: Array<IFile>;
      }>;
    })
  );
}

fileManagementControllerGetFiles.PATH = '/file-management/files';
