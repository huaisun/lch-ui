import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ant-design
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule,
    // ant-design
    NzButtonModule,
    NzCardModule,
    NzFormModule,
    NzInputModule,
    NzCheckboxModule,
    NzIconModule,
    NzMenuModule,
    NzLayoutModule,
    NzAvatarModule,
    NzAffixModule,
    NzListModule,
    NzGridModule
  ]
})
export class ShareModule { }
