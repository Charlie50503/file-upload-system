import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomExceptionDto } from '../../api/v1/models';
import { ResponseError } from '../../commons/interfaces/response-error';
import { AlertDialogComponent } from '../../commons/shared/alert-dialog/alert-dialog.component';

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
    } else if ('error' in error.error) {
      const defaultError = error.error as ResponseError;
      this.dialogRef.open(AlertDialogComponent, {
        minWidth: '360px',
        disableClose: true,
        autoFocus: false,
        data: {
          fieldTypeName: 'alertMsgWarn',
          alertTitle: defaultError.error,
          alertContent: Array.isArray(defaultError.message)
            ? defaultError.message.join('\n')
            : defaultError.message,
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
