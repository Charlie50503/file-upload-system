/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { authControllerSignIn } from '../fn/auth/auth-controller-sign-in';
import { AuthControllerSignIn$Params } from '../fn/auth/auth-controller-sign-in';
import { authControllerSignUp } from '../fn/auth/auth-controller-sign-up';
import { AuthControllerSignUp$Params } from '../fn/auth/auth-controller-sign-up';
import { ResponseDto } from '../models/response-dto';
import { SignInResDto } from '../models/sign-in-res-dto';

@Injectable({ providedIn: 'root' })
export class AuthService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `authControllerSignIn()` */
  static readonly AuthControllerSignInPath = '/auth/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authControllerSignIn()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authControllerSignIn$Response(params: AuthControllerSignIn$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseDto & {
'data'?: SignInResDto;
}>> {
    return authControllerSignIn(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authControllerSignIn$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authControllerSignIn(params: AuthControllerSignIn$Params, context?: HttpContext): Observable<ResponseDto & {
'data'?: SignInResDto;
}> {
    return this.authControllerSignIn$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseDto & {
'data'?: SignInResDto;
}>): ResponseDto & {
'data'?: SignInResDto;
} => r.body)
    );
  }

  /** Path part for operation `authControllerSignUp()` */
  static readonly AuthControllerSignUpPath = '/auth/sign-up';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authControllerSignUp()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authControllerSignUp$Response(params: AuthControllerSignUp$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseDto & {
'data'?: SignInResDto;
}>> {
    return authControllerSignUp(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authControllerSignUp$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authControllerSignUp(params: AuthControllerSignUp$Params, context?: HttpContext): Observable<ResponseDto & {
'data'?: SignInResDto;
}> {
    return this.authControllerSignUp$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseDto & {
'data'?: SignInResDto;
}>): ResponseDto & {
'data'?: SignInResDto;
} => r.body)
    );
  }

}
