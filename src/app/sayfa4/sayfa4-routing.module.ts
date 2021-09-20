import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sayfa4Page } from './sayfa4.page';

const routes: Routes = [
  {
    path: '',
    component: Sayfa4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sayfa4PageRoutingModule {}
