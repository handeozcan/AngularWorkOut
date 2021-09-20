import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sayfa10Page } from './sayfa10.page';

const routes: Routes = [
  {
    path: '',
    component: Sayfa10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sayfa10PageRoutingModule {}
