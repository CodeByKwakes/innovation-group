import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListPage } from './pages/product-list/product-list.page';
import { ProductCardModule } from '@innovation-group/code-challenge/ui/product-card';
@NgModule({
  imports: [
    CommonModule,
    ProductCardModule,
    RouterModule.forChild([{ path: '', component: ProductListPage }]),
  ],
  declarations: [ProductListPage],
})
export class ProductModule {}
