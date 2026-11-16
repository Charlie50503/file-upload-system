import { AlertSnackbarService } from './../../commons/shared/alert-snackbar/alert-snackbar.service';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../api/v1/services';
import { CustomExceptionDto } from '../../api/v1/models';
import { AlertDialogComponent } from '../../commons/shared/alert-dialog/alert-dialog.component';
import { ResponseError } from '../../commons/interfaces/response-error';
import { ErrorHandlerService } from '../../core/services/error-handler.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
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
    private errorHandlerService: ErrorHandlerService,
  ) {}

  public signUp() {
    this.signUpFormGroup.markAllAsTouched();
    if (this.signUpFormGroup.invalid) {
      return;
    }

    this.authService
      .authControllerSignUp({
        body: this.signUpFormGroup.getRawValue(),
      })
      .subscribe({
        next: (res) => {
          this.alertSnackbarService.onAttachRequestSucceeded();
          this.signUpFormGroup.reset();
        },
        error: this.errorHandlerService.handleRequestError.bind(this.errorHandlerService),
      });
  }
}
