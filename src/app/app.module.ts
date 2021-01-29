import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPageModule } from './pages/login/login.module';
import { GlobalServiceService } from './service/Globale/global-service.service';
import { NotificationPagePageModule } from './pages/notification-page/notification-page.module';
import { ComptePageModule } from './pages/compte/compte.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { DemandePageModule } from './pages/demande/demande.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(),
     AppRoutingModule,
     LoginPageModule,
     FormsModule,
     ReactiveFormsModule,
     NotificationPagePageModule,
     ComptePageModule,
     DemandePageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GlobalServiceService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
