import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from '@innovation-group/code-challenge/shared/header';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HeaderModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          redirectTo: 'products',
          pathMatch: 'full',
        },
        {
          path: 'products',
          loadChildren: () =>
            import('@innovation-group/code-challenge/feature/product').then(
              (module) => module.ProductModule
            ),
        },
      ],
      { initialNavigation: 'enabled' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
