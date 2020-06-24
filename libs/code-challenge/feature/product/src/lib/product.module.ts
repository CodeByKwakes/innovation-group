import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListPage } from './pages/product-list/product-list.page';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      { path: '', component: ProductListPage },
    ]),
  ],
  declarations: [ProductListPage],
})
export class ProductModule {}
