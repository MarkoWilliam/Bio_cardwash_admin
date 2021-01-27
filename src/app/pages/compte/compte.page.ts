import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.page.html',
  styleUrls: ['./compte.page.scss'],
})
export class ComptePage implements OnInit {

  constructor(private modalCtrl: ModalController,
    private router: Router,
    public loadingController: LoadingController,) { }

  ngOnInit() {
  }
 

  close() {
    this.router.navigate(['notification-page']);
  }

  

}
