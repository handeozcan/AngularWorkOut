import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sayfa5Page } from './sayfa5.page';

const routes: Routes = [
  {
    path: '',
    component: Sayfa5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Sayfa5PageRoutingModule {}
