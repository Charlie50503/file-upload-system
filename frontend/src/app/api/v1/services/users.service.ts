/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { usersControllerCreate } from '../fn/users/users-controller-create';
import { UsersControllerCreate$Params } from '../fn/users/users-controller-create';
import { usersControllerFindOneById } from '../fn/users/users-controller-find-one-by-id';
import { UsersControllerFindOneById$Params } from '../fn/users/users-controller-find-one-by-id';

@Injectable({ providedIn: 'root' })
export class UsersService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `usersControllerFindOneById()` */
  static readonly UsersControllerFindOneByIdPath = '/users/findById/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersControllerFindOneById()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersControllerFindOneById$Response(params: UsersControllerFindOneById$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return usersControllerFindOneById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersControllerFindOneById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersControllerFindOneById(params: UsersControllerFindOneById$Params, context?: HttpContext): Observable<void> {
    return this.usersControllerFindOneById$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `usersControllerCreate()` */
  static readonly UsersControllerCreatePath = '/users';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersControllerCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersControllerCreate$Response(params: UsersControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return usersControllerCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersControllerCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  usersControllerCreate(params: UsersControllerCreate$Params, context?: HttpContext): Observable<void> {
    return this.usersControllerCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
