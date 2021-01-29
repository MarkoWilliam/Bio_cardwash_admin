import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 

import { DemandePage } from './demande.page';

const routes: Routes = [
  {
    path: '',
    component: DemandePage,
    children: [
      {
        path: 'notification-page',
        children: [
          {
            path: '',
            loadChildren: () => import('../notification-page/notification-page.module').then( m => m.NotificationPagePageModule)
          }
        ]
      },
      {
        path: 'confirmer',
        children: [
          {
            path: '',
            loadChildren: () => import('../confirmer/confirmer.module').then( m => m.ConfirmerPageModule)
          }
        ]
      },
      {
        path: 'annuler',
        children: [
          {
            path: '',
            loadChildren: () => import('../annuler/annuler.module').then( m => m.AnnulerPageModule)
          }
        ]
      },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandePageRoutingModule {}
