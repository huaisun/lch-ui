import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalComponent } from './personal/personal.component';
import { CollectComponent } from './collect/collect.component';

import { AppRoutingModule } from '../app-routing.module';

import { ShareModule } from '../share/share.module';
import { DomainComponent } from './domain.component';
import { ComModule } from '../common/com.module';
import { PrivateComponent } from './private/private.component';
import { ExpComponent } from './exp/exp.component';

@NgModule({
  declarations: [PersonalComponent, CollectComponent, DomainComponent, PrivateComponent, ExpComponent],
  imports: [
    CommonModule,
    ShareModule,
    AppRoutingModule,
    ComModule
  ]
})
export class DomainModule { }
