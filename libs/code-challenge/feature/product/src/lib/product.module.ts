import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListPage } from './pages/product-list/product-list.page';
import { ProductCardModule } from '@innovation-group/code-challenge/ui/product-card';
import { DataAccessModule } from '@innovation-group/code-challenge/data-access';

@NgModule({
  imports: [
    CommonModule,
    ProductCardModule,
    DataAccessModule,
    RouterModule.forChild([{ path: '', component: ProductListPage }]),
  ],
  declarations: [ProductListPage],
  exports: [DataAccessModule],
})
export class ProductModule {}
