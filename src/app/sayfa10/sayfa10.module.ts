import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sayfa10PageRoutingModule } from './sayfa10-routing.module';

import { Sayfa10Page } from './sayfa10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sayfa10PageRoutingModule
  ],
  declarations: [Sayfa10Page]
})
export class Sayfa10PageModule {}
