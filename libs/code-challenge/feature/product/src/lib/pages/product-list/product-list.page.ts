import { Component, OnInit } from '@angular/core';
import { ApiService } from '@innovation-group/code-challenge/data-access';

@Component({
  selector: 'innovation-group-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  products$ = this._productSrv.getProducts();
  basketTotal$ = this._productSrv.basketAction$;

  private _basketTotal = 0;

  constructor(private _productSrv: ApiService) {}

  ngOnInit(): void {}

  onAddToBasket(price: number) {
    this._basketTotal = this._basketTotal += +price;
    this._productSrv.addTotalBasketValue(+this._basketTotal.toFixed(2));
  }
}
