import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmerPage } from './confirmer.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmerPageRoutingModule {}
