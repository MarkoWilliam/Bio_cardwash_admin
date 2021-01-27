import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnulerPage } from './annuler.page';

const routes: Routes = [
  {
    path: '',
    component: AnnulerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnulerPageRoutingModule {}
