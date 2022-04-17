import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'upload-file',
    pathMatch: 'full'
  },
  {
    path: 'upload-file',
    loadChildren: () => import('./upload-file/upload-file.module')
      .then(m => m.UploadFileModule)
  },
  {
    path: 'generate-graph',
    loadChildren: () => import('./generate-graph/generate-graph.module')
      .then(m => m.GenerateGraphModule)
  },
  {
    path: 'balance-viewer',
    loadChildren: () => import('./balance-viewer/balance-viewer.module')
      .then(m => m.BalanceViewerModule)
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
