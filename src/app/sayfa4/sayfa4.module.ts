import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sayfa4PageRoutingModule } from './sayfa4-routing.module';

import { Sayfa4Page } from './sayfa4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sayfa4PageRoutingModule
  ],
  declarations: [Sayfa4Page]
})
export class Sayfa4PageModule {}
