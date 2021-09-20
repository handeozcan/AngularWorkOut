import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sayfa7PageRoutingModule } from './sayfa7-routing.module';

import { Sayfa7Page } from './sayfa7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sayfa7PageRoutingModule
  ],
  declarations: [Sayfa7Page]
})
export class Sayfa7PageModule {}
