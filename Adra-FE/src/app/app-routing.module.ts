import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRole } from './constants/user-role';
import { LayoutComponent } from './core/layout/layout.component';
import { AuthGuard } from './helpers';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'upload-file',
        pathMatch: 'full'
      },
      {
        path: 'upload-file',
        canActivate: [AuthGuard],
        data: {
          role: UserRole.ADMIN
        },
        loadChildren: () => import('./upload-file/upload-file.module')
          .then(m => m.UploadFileModule)
      },
      {
        path: 'generate-graph',
        canActivate: [AuthGuard],
        data: {
          role: UserRole.ADMIN
        },
        loadChildren: () => import('./generate-graph/generate-graph.module')
          .then(m => m.GenerateGraphModule)
      },
      {
        path: 'balance-viewer',
        canActivate: [AuthGuard],
        data: {
          role: UserRole.USER
        },
        loadChildren: () => import('./balance-viewer/balance-viewer.module')
          .then(m => m.BalanceViewerModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'upload-file'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
