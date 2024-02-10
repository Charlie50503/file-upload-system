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
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../../../core/services/user.service';
import { TokenService } from '../../../core/services/token.service';
import { AuthService } from 'src/app/api/v1/services';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
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
export class LoginComponent {
  // 設置密碼是否可以看的到
  public isLoginPasswordHide = true;

  public loginFormGroup = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  constructor(
    private router: Router,
    public dialogRef: MatDialog,
    private userService: UserService,
    private tokenService: TokenService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private errorHandlerService: ErrorHandlerService,
  ) {}

  // 登入
  public LoginUI() {
    if (this.loginFormGroup.invalid) {
      this.loginFormGroup.markAllAsTouched();
      return;
    }

    this.authService
      .authControllerSignIn({
        body: this.loginFormGroup.getRawValue(),
      })
      .subscribe({
        next: (res) => {
          this.userService.setUserInfo(res.data);
          this.tokenService.getAccessToken().setToken(res.data.token!);
          this.router.navigate(['/home/file-management']);
        },
        error: this.errorHandlerService.handleRequestError.bind(this),
      });
  }
}
