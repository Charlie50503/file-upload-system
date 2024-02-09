/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface FileManagementControllerDownload$Params {
  fileName: string;
}

export function fileManagementControllerDownload(http: HttpClient, rootUrl: string, params: FileManagementControllerDownload$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, fileManagementControllerDownload.PATH, 'get');
  if (params) {
    rb.path('fileName', params.fileName, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: 'application/octet-stream', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Blob>;
    })
  );
}

fileManagementControllerDownload.PATH = '/file-management/file/{fileName}';
