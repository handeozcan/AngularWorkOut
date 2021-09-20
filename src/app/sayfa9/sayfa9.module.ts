import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sayfa9PageRoutingModule } from './sayfa9-routing.module';

import { Sayfa9Page } from './sayfa9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sayfa9PageRoutingModule
  ],
  declarations: [Sayfa9Page]
})
export class Sayfa9PageModule {}
