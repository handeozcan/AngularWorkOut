import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sayfa7Page } from './sayfa7.page';

const routes: Routes = [
  {
    path: '',
    component: Sayfa7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sayfa7PageRoutingModule {}
