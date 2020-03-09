import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HomeModule } from './home/home.module';
import { DomainModule } from './domain/domain.module';
import { ComModule } from './common/com.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    DomainModule,
    ComModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
