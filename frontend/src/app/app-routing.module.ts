import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./commons/pages/login/login.component').then(
        (c) => c.LoginComponent,
      ),
  },
  {
    path: 'home',
    // canActivate: [authGuard],
    loadComponent: () =>
      import('./layouts/home/home.component').then(
        (c) => c.HomeComponent,
      ),
    children: [
      {
        path: 'file-management',
        loadComponent: () =>
          import(
            './pages/file-management/file-management.component'
          ).then((c) => c.FileManagementComponent),
      },
      {
        path: 'sign-up',
        loadComponent: () =>
          import('./pages/sign-up/sign-up.component').then(
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
