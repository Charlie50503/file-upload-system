import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInResDto } from 'src/app/api/v1/models';

export interface LoginPage {
  isShowITDepPage?: boolean;
  isShowGMOfficePage?: boolean;
  isShowDemandDepPage?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _user!: SignInResDto;

  constructor(public dialog: MatDialog) {}

  public setUserInfo(user: SignInResDto) {
    this._user = user;
  }
  public getUserInfo() {
    return this._user;
  }
}
