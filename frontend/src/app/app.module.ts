import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
import { ApiModule as ApiModuleV1 } from './api/v1/api.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
  withXhr,
} from '@angular/common/http';
import { apiInterceptor } from './core/interceptors/api.interceptor';
import { environment } from '../environments/environment';
import { NgxSpinnerModule } from 'ngx-spinner';
import { spinnerInterceptor } from './core/interceptors/spinner.interceptor';
import { PrimarySpinnerComponent } from './commons/shared/spinner/primary-spinner/primary-spinner.component';
function tokenGetter() {
  return localStorage.getItem(environment.tokenName.access);
}
@NgModule({
  declarations: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  imports: [
    PrimarySpinnerComponent,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ApiModuleV1.forRoot({ rootUrl: environment.apiUrl }),
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: [environment.domain],
      },
    }),
    NgxSpinnerModule,
  ],
  providers: [
    provideHttpClient(
      withXhr(),
      withInterceptors([apiInterceptor, spinnerInterceptor]),
      withInterceptorsFromDi(),
    ),
  ],
})
export class AppModule {}
