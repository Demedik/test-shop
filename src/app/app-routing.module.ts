import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesENUM } from './app.constants';

const routes: Routes = [
  {
    path: '',
    redirectTo: `category/${CategoriesENUM.EFUKTSHIRTS}`,
    pathMatch: 'full'
  },
  {
    path: 'category/:category',
    loadChildren: () => import('./pages/content-page').then(({ContentPageModule}) => ContentPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
