import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sayfa8PageRoutingModule } from './sayfa8-routing.module';

import { Sayfa8Page } from './sayfa8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sayfa8PageRoutingModule
  ],
  declarations: [Sayfa8Page]
})
export class Sayfa8PageModule {}
