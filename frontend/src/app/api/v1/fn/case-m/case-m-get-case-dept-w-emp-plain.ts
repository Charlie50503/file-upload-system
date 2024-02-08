/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CaseDeptMQuery } from '../../models/case-dept-m-query';
import { CaseDeptWEmpResult } from '../../models/case-dept-w-emp-result';

export interface CaseMGetCaseDeptWEmp$Plain$Params {
  
    /**
     * 取得參數(必要欄位：)
     */
    body?: CaseDeptMQuery
}

export function caseMGetCaseDeptWEmp$Plain(http: HttpClient, rootUrl: string, params?: CaseMGetCaseDeptWEmp$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CaseDeptWEmpResult>> {
  const rb = new RequestBuilder(rootUrl, caseMGetCaseDeptWEmp$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CaseDeptWEmpResult>;
    })
  );
}

caseMGetCaseDeptWEmp$Plain.PATH = '/eCaseManager/CaseM/GetCaseDeptWEmp';
