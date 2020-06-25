import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ApiService,
  Product,
} from '@innovation-group/code-challenge/data-access';
import { Observable } from 'rxjs';

@Component({
  selector: 'innovation-group-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  product$: Observable<Product>;
  constructor(
    private _activeRoute: ActivatedRoute,
    private _router: Router,
    private _productSrv: ApiService
  ) {}

  ngOnInit(): void {
    const id = this._activeRoute.snapshot.paramMap.get('id');
    this.product$ = this._productSrv.getProductById(+id);
  }

  onRouteToProductList() {
    this._router.navigate(['/products']);
  }

  onAddToBasket(price: number) {
    this._productSrv.addTotalBasketValue(price);
  }
}
