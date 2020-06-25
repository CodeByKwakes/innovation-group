import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';

export interface Product {
  id: number;
  label: string;
  src: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  _url = 'json/products.json';
  private _basketTotal = 0;

  private _basketSubject$ = new BehaviorSubject<number>(0);
  basketAction$ = this._basketSubject$.asObservable();

  constructor(private _http: HttpClient) {}

  getProducts(key: string = 'id'): Observable<Product[]> {
    return this._http.get<Product[]>(this._url).pipe(
      map((products) => products.sort(this.compareValues(key))),
      shareReplay(1)
    );
  }

  getProductById(id: number): Observable<Product> {
    return this.getProducts().pipe(
      map((products) => products.find((item) => item.id === id))
    );
  }

  addTotalBasketValue(totalPrice: number) {
    this._basketTotal = this._basketTotal += totalPrice;
    this._basketSubject$.next(+this._basketTotal.toFixed(2));
  }

  compareValues(key: string, order = 'asc') {
    return function innerSort(a: Product, b: Product) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === 'desc' ? comparison * -1 : comparison;
    };
  }
}
