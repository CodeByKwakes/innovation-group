import { Component, OnInit } from '@angular/core';
import { ApiService } from '@innovation-group/code-challenge/data-access';

@Component({
  selector: 'innovation-group-header',
  templateUrl: './header.container.html',
  styleUrls: ['./header.container.scss'],
})
export class HeaderContainer implements OnInit {
  basketTotal$ = this._productSrv.basketAction$;

  constructor(private _productSrv: ApiService) {}

  ngOnInit(): void {}
}
