import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sayfa6Page } from './sayfa6.page';

const routes: Routes = [
  {
    path: '',
    component: Sayfa6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sayfa6PageRoutingModule {}
