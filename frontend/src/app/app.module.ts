import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
import { ApiModule as ApiModuleV1 } from 'src/app/api/v1/api.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { apiInterceptor } from './core/interceptors/api.interceptor';
import { environment } from 'src/environments/environment';
import { NgxSpinnerModule } from 'ngx-spinner';
import { spinnerInterceptor } from './core/interceptors/spinner.interceptor';
import { PrimarySpinnerComponent } from './commons/shared/spinner/primary-spinner/primary-spinner.component';
function tokenGetter() {
  return localStorage.getItem(environment.tokenName.access);
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    PrimarySpinnerComponent,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ApiModuleV1.forRoot({ rootUrl: environment.apiUrl }),
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: [environment.domain],
      },
    }),
    NgxSpinnerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    provideHttpClient(withInterceptors([apiInterceptor, spinnerInterceptor])),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
