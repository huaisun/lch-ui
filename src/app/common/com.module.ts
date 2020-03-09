import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourZeroFourComponent } from './four-zero-four/four-zero-four.component';
import { TopComponent } from './top/top.component';

import { ShareModule } from '../share/share.module';
import { CategoryLinkComponent } from './category-link/category-link.component';


@NgModule({
  declarations: [FourZeroFourComponent, TopComponent, CategoryLinkComponent],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports: [TopComponent, CategoryLinkComponent]
})
export class ComModule { }
