import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { GlobalServiceService } from './service/Globale/global-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  categories = [];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router : Router,  
    public global: GlobalServiceService
  ) {
    this.initializeApp();
    // this.categories = [
    //   {
    //     title: "Accueil",
    //     icon: "home",
    //     callback: () => {
    //       this.router.navigate(['home']);
    //     }
    //   },
    // ]
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  deconnection() {
    this.global.connected = false;
    this.router.navigate(['login']);
  }

  monCompte() {
    this.router.navigate(['compte']);
  }


  connexion() {
    this.router.navigate(['login'])
  }
}
