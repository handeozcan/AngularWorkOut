import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Sayfa5PageRoutingModule } from './sayfa5-routing.module';

import { Sayfa5Page } from './sayfa5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Sayfa5PageRoutingModule
  ],
  declarations: [Sayfa5Page]
})
export class Sayfa5PageModule {}
