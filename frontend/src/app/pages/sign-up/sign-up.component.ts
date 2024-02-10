import { AlertSnackbarService } from './../../commons/shared/alert-snackbar/alert-snackbar.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from 'src/app/api/v1/services';
import { CustomExceptionDto } from 'src/app/api/v1/models';
import { AlertDialogComponent } from 'src/app/commons/shared/alert-dialog/alert-dialog.component';
import { ResponseError } from 'src/app/commons/interfaces/response-error';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    CommonModule,
  ],
})
export class SignUpComponent {
  // 設置密碼是否可以看的到
  public isLoginPasswordHide = true;

  public signUpFormGroup = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  constructor(
    public dialogRef: MatDialog,
    private authService: AuthService,
    private alertSnackbarService: AlertSnackbarService,
  ) {}

  public signUp() {
    this.authService
      .authControllerSignUp({
        body: this.signUpFormGroup.getRawValue(),
      })
      .subscribe({
        next: (res) => {
          this.alertSnackbarService.onAttachRequestSucceeded();
          this.signUpFormGroup.reset();
        },
        error: (error: any) => {
          debugger;
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
          } else {
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
          }
        },
      });
  }
}
