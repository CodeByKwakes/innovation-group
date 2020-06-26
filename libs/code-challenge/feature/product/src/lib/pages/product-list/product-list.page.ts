import { Component, OnInit } from '@angular/core';
import { ApiService } from '@innovation-group/code-challenge/data-access';
import { Router } from '@angular/router';

@Component({
  selector: 'innovation-group-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  products$ = this._productSrv.getProducts();

  basketTotal$ = this._productSrv.basketAction$;
  sortKey = 'price';
  constructor(private _productSrv: ApiService, private _router: Router) {}

  ngOnInit(): void {}

  onAddToBasket(price: number) {
    this._productSrv.addTotalBasketValue(price);
  }

  sortByKey(key: string) {
    this.sortKey = key;
    this.products$ = this._productSrv.getProducts(key);
  }

  onSelectedProduct(id: number) {
    this._router.navigate(['/products', id]);
  }
}
