import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../../common/material.module';

import { ContentPageComponent } from './content-page.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductLoadMoreComponent } from './components/product-load-more/product-load-more.component';

@NgModule({
  declarations: [
    CategoryComponent,
    ContentPageComponent,
    ProductItemComponent,
    CartComponent,
    ProductLoadMoreComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContentPageComponent
      }
    ]),
  ]
})
export class ContentPageModule { }
