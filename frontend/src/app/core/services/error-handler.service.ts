import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomExceptionDto } from 'src/app/api/v1/models';
import { ResponseError } from 'src/app/commons/interfaces/response-error';
import { AlertDialogComponent } from 'src/app/commons/shared/alert-dialog/alert-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor(private dialogRef: MatDialog) {}

  handleRequestError(error: any) {
    if ('errorCode' in error.error) {
      const customError = error.error as CustomExceptionDto;

      this.dialogRef.open(AlertDialogComponent, {
        minWidth: '360px',
        disableClose: true,
        autoFocus: false,
        data: {
          fieldTypeName: 'alertMsgWarn',
          alertTitle: customError.errorCode,
          alertContent: customError.errorMessage,
        },
      });
    } else if ('statusCode' in error.error) {
      const defaultError = error.error as ResponseError;
      this.dialogRef.open(AlertDialogComponent, {
        minWidth: '360px',
        disableClose: true,
        autoFocus: false,
        data: {
          fieldTypeName: 'alertMsgWarn',
          alertTitle: defaultError.error,
          alertContent: defaultError.message.join('\n'),
        },
      });
    } else {
      this.dialogRef.open(AlertDialogComponent, {
        minWidth: '360px',
        disableClose: true,
        autoFocus: false,
        data: {
          fieldTypeName: 'alertMsgWarn',
          alertTitle: '未知錯誤',
          alertContent: '請求失敗，請稍後再試',
        },
      });
    }
  }
}
