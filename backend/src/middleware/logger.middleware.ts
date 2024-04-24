import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(request: Request, response: Response, next: NextFunction): void {
    const { method, originalUrl, body } = request;
    this.logger.log(`[REQ] ${method} ${originalUrl} ${JSON.stringify(body)}`);

    const oldWrite = response.write;
    const oldEnd = response.end;
    const chunks = [];
    response.write = function (...args: any[]) {
      if (args[0]) {
        chunks.push(Buffer.from(args[0]));
      }
      // chunks.push(chunk);
      return oldWrite.apply(response, args);
    };
    response.end = function (...args: any[]) {
      if (args[0]) {
        chunks.push(Buffer.from(args[0]));
      }
      // if (chunk) {
      //   chunks.push(chunk);
      // }
      return oldEnd.apply(response, args);
    };

    response.on('finish', () => {
      const { statusCode } = response;
      const responseBody = Buffer.concat(chunks).toString('utf8');
      this.logger.log(
        `[RES] ${method} ${originalUrl} ${statusCode} ${responseBody}`,
      );
    });

    next();
  }
}
