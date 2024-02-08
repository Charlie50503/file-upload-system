/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { DepTeamQuery } from '../../models/dep-team-query';
import { DepTeamResult } from '../../models/dep-team-result';

export interface OrganizeGetDepTeam$Json$Params {
      body?: DepTeamQuery
}

export function organizeGetDepTeam$Json(http: HttpClient, rootUrl: string, params?: OrganizeGetDepTeam$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<DepTeamResult>> {
  const rb = new RequestBuilder(rootUrl, organizeGetDepTeam$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<DepTeamResult>;
    })
  );
}

organizeGetDepTeam$Json.PATH = '/api/Organize/GetDepTEAM';
