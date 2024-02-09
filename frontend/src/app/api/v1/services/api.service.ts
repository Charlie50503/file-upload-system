/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { authControllerGetProfile } from '../fn/operations/auth-controller-get-profile';
import { AuthControllerGetProfile$Params } from '../fn/operations/auth-controller-get-profile';
import { authControllerSignIn } from '../fn/operations/auth-controller-sign-in';
import { AuthControllerSignIn$Params } from '../fn/operations/auth-controller-sign-in';

@Injectable({ providedIn: 'root' })
export class ApiService extends BaseService {
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
  authControllerSignIn$Response(params: AuthControllerSignIn$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return authControllerSignIn(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authControllerSignIn$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authControllerSignIn(params: AuthControllerSignIn$Params, context?: HttpContext): Observable<void> {
    return this.authControllerSignIn$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `authControllerGetProfile()` */
  static readonly AuthControllerGetProfilePath = '/auth/profile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authControllerGetProfile()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerGetProfile$Response(params?: AuthControllerGetProfile$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return authControllerGetProfile(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authControllerGetProfile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  authControllerGetProfile(params?: AuthControllerGetProfile$Params, context?: HttpContext): Observable<void> {
    return this.authControllerGetProfile$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
