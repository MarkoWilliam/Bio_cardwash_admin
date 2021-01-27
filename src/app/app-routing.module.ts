import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'notification-page',
    loadChildren: () => import('./pages/notification-page/notification-page.module').then( m => m.NotificationPagePageModule)
  },
  {
    path: 'compte',
    loadChildren: () => import('./pages/compte/compte.module').then( m => m.ComptePageModule)
  },
  {
    path: 'confirmer',
    loadChildren: () => import('./pages/confirmer/confirmer.module').then( m => m.ConfirmerPageModule)
  },
  {
    path: 'annuler',
    loadChildren: () => import('./pages/annuler/annuler.module').then( m => m.AnnulerPageModule)
  },
  // { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
