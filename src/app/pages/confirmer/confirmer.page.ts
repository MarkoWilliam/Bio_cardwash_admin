import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/component/popover/popover.component';

@Component({
  selector: 'app-confirmer',
  templateUrl: './confirmer.page.html',
  styleUrls: ['./confirmer.page.scss'],
})
export class ConfirmerPage implements OnInit {


  constructor(public router: Router, 
    public popoverController: PopoverController) { }

  ngOnInit() {
  }

  compte() {
    this.router.navigate(['compte']);
  }

  close() {
    this.router.navigate(['annuler']);
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
