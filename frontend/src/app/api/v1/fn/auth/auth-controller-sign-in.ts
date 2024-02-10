/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ResponseDto } from '../../models/response-dto';
import { SignInDto } from '../../models/sign-in-dto';
import { SignInResDto } from '../../models/sign-in-res-dto';

export interface AuthControllerSignIn$Params {
      body: SignInDto
}

export function authControllerSignIn(http: HttpClient, rootUrl: string, params: AuthControllerSignIn$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseDto & {
'data'?: SignInResDto;
}>> {
  const rb = new RequestBuilder(rootUrl, authControllerSignIn.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ResponseDto & {
      'data'?: SignInResDto;
      }>;
    })
  );
}

authControllerSignIn.PATH = '/auth/login';
