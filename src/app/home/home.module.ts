import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [HomeComponent, SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    ShareModule
  ]
})
export class HomeModule { }
