/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ExtPatchInput } from '../../models/ext-patch-input';
import { ExtPatchResult } from '../../models/ext-patch-result';

export interface CaseMExternalDispatch$Json$Params {
  
    /**
     * 儲存參數(必要欄位：)
     */
    body?: ExtPatchInput
}

export function caseMExternalDispatch$Json(http: HttpClient, rootUrl: string, params?: CaseMExternalDispatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<ExtPatchResult>> {
  const rb = new RequestBuilder(rootUrl, caseMExternalDispatch$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ExtPatchResult>;
    })
  );
}

caseMExternalDispatch$Json.PATH = '/eCaseManager/CaseM/ExternalDispatch';
