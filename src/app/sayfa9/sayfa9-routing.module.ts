import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sayfa9Page } from './sayfa9.page';

const routes: Routes = [
  {
    path: '',
    component: Sayfa9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sayfa9PageRoutingModule {}
