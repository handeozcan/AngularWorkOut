import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sayfa6PageRoutingModule } from './sayfa6-routing.module';

import { Sayfa6Page } from './sayfa6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sayfa6PageRoutingModule
  ],
  declarations: [Sayfa6Page]
})
export class Sayfa6PageModule {}
