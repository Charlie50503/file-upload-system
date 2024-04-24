export class HttpResponse {
  public statusCode;
  public message: 'success' | 'fail';
  public data: any = {};

  constructor(
    statusCode: number = 200,
    message: 'success' | 'fail' = 'success',
    data: any,
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}
