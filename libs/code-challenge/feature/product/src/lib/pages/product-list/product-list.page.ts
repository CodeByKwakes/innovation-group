import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'innovation-group-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  test = {
    id: 1,
    label: 'orange',
    src: 'assets/orange.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 0.5,
  };
  total = 0;
  constructor() {}

  ngOnInit(): void {}

  onAddToBasket(price) {
    this.total = this.total += price;
    console.log('ProductListPage -> onAddToBasket -> total', this.total);
  }
}
