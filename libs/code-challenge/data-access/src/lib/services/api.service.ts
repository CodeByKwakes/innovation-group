import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

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

  private _basketSubject$ = new BehaviorSubject<number>(0);
  basketAction$ = this._basketSubject$.asObservable();

  constructor(private _http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this._url).pipe(shareReplay(1));
  }

  getProductById(id: number): Observable<Product> {
    return this.getProducts().pipe(
      map((products) => products.find((item) => item.id === id))
    );
  }

  addTotalBasketValue(totalPrice: number) {
    this._basketSubject$.next(totalPrice);
  }
}
