/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { fileManagementControllerDelete } from '../fn/file-management/file-management-controller-delete';
import { FileManagementControllerDelete$Params } from '../fn/file-management/file-management-controller-delete';
import { fileManagementControllerDownload } from '../fn/file-management/file-management-controller-download';
import { FileManagementControllerDownload$Params } from '../fn/file-management/file-management-controller-download';
import { fileManagementControllerGetFiles } from '../fn/file-management/file-management-controller-get-files';
import { FileManagementControllerGetFiles$Params } from '../fn/file-management/file-management-controller-get-files';
import { fileManagementControllerUpload } from '../fn/file-management/file-management-controller-upload';
import { FileManagementControllerUpload$Params } from '../fn/file-management/file-management-controller-upload';
import { IFile } from '../models/i-file';
import { ResponseDto } from '../models/response-dto';

@Injectable({ providedIn: 'root' })
export class FileManagementService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `fileManagementControllerUpload()` */
  static readonly FileManagementControllerUploadPath = '/file-management/file';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fileManagementControllerUpload()` instead.
   *
   * This method doesn't expect any request body.
   */
  fileManagementControllerUpload$Response(params?: FileManagementControllerUpload$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return fileManagementControllerUpload(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fileManagementControllerUpload$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  fileManagementControllerUpload(params?: FileManagementControllerUpload$Params, context?: HttpContext): Observable<void> {
    return this.fileManagementControllerUpload$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `fileManagementControllerDelete()` */
  static readonly FileManagementControllerDeletePath = '/file-management/file';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fileManagementControllerDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  fileManagementControllerDelete$Response(params: FileManagementControllerDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return fileManagementControllerDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fileManagementControllerDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  fileManagementControllerDelete(params: FileManagementControllerDelete$Params, context?: HttpContext): Observable<void> {
    return this.fileManagementControllerDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `fileManagementControllerDownload()` */
  static readonly FileManagementControllerDownloadPath = '/file-management/file/{fileName}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fileManagementControllerDownload()` instead.
   *
   * This method doesn't expect any request body.
   */
  fileManagementControllerDownload$Response(params: FileManagementControllerDownload$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return fileManagementControllerDownload(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fileManagementControllerDownload$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  fileManagementControllerDownload(params: FileManagementControllerDownload$Params, context?: HttpContext): Observable<void> {
    return this.fileManagementControllerDownload$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `fileManagementControllerGetFiles()` */
  static readonly FileManagementControllerGetFilesPath = '/file-management/files';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fileManagementControllerGetFiles()` instead.
   *
   * This method doesn't expect any request body.
   */
  fileManagementControllerGetFiles$Response(params?: FileManagementControllerGetFiles$Params, context?: HttpContext): Observable<StrictHttpResponse<ResponseDto & {
'data'?: Array<IFile>;
}>> {
    return fileManagementControllerGetFiles(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fileManagementControllerGetFiles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  fileManagementControllerGetFiles(params?: FileManagementControllerGetFiles$Params, context?: HttpContext): Observable<ResponseDto & {
'data'?: Array<IFile>;
}> {
    return this.fileManagementControllerGetFiles$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResponseDto & {
'data'?: Array<IFile>;
}>): ResponseDto & {
'data'?: Array<IFile>;
} => r.body)
    );
  }

}
