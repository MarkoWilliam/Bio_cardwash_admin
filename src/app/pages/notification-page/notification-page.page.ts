import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ComptePage } from '../compte/compte.page';

@Component({
  selector: 'app-notification-page',
  templateUrl: './notification-page.page.html',
  styleUrls: ['./notification-page.page.scss'],
})
export class NotificationPagePage implements OnInit {

  constructor(
    public router: Router,
    public modalCtrl: ModalController,
  ) { }

  ngOnInit() { 
  }


  compte() {
    this.router.navigate(['compte']);
  }

  //  async open() {
  //   const modal = await this.modalCtrl.create({
  //    component: ComptePage,
  //    cssClass: 'my-custom-class'
  //   });
  
  // await modal.present();
  //   }

}
