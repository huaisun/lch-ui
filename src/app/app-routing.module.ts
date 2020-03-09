import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// 共同
import { FourZeroFourComponent } from './common/four-zero-four/four-zero-four.component';

// 主页
import { HomeComponent } from './home/home.component';

// 域名
import { DomainComponent } from './domain/domain.component';
import { PersonalComponent } from './domain/personal/personal.component';
import { CollectComponent } from './domain/collect/collect.component';
import { PrivateComponent } from './domain/private/private.component';
import { ExpComponent } from './domain/exp/exp.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '404', component: FourZeroFourComponent },
  {
    path: ':domain', component: DomainComponent, children: [
      {
        path: '', component: PersonalComponent
      }, {
        path: 'collect', component: CollectComponent
      }, {
        path: 'private', component: PrivateComponent
      }, {
        path: 'exp', component: ExpComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
