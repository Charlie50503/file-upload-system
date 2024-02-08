/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CaseDeptEmpQuery } from '../../models/case-dept-emp-query';
import { CaseDeptEmpResult } from '../../models/case-dept-emp-result';

export interface CaseMRemoveCaseDeptEmp$Plain$Params {
  
    /**
     * 儲存參數(必要欄位：)
     */
    body?: CaseDeptEmpQuery
}

export function caseMRemoveCaseDeptEmp$Plain(http: HttpClient, rootUrl: string, params?: CaseMRemoveCaseDeptEmp$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<CaseDeptEmpResult>> {
  const rb = new RequestBuilder(rootUrl, caseMRemoveCaseDeptEmp$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CaseDeptEmpResult>;
    })
  );
}

caseMRemoveCaseDeptEmp$Plain.PATH = '/eCaseManager/CaseM/RemoveCaseDeptEmp';
