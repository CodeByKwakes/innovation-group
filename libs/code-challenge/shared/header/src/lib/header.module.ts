import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataAccessModule } from '@innovation-group/code-challenge/data-access';
import { HeaderContainer } from './containers/header/header.container';
@NgModule({
  imports: [CommonModule, DataAccessModule],
  declarations: [HeaderContainer],
  exports: [HeaderContainer],
})
export class HeaderModule {}
