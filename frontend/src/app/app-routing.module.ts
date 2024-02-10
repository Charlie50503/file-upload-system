import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('src/app/commons/pages/login/login.component').then(
        (c) => c.LoginComponent,
      ),
  },
  {
    path: 'home',
    // canActivate: [authGuard],
    loadComponent: () =>
      import('src/app/layouts/home/home.component').then(
        (c) => c.HomeComponent,
      ),
    children: [
      {
        path: 'file-management',
        loadComponent: () =>
          import(
            'src/app/pages/file-management/file-management.component'
          ).then((c) => c.FileManagementComponent),
      },
      {
        path: 'sign-up',
        loadComponent: () =>
          import('src/app/pages/sign-up/sign-up.component').then(
            (c) => c.SignUpComponent,
          ),
      },
    ],
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
