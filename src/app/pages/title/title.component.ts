import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {

  isNew: boolean =  false;
  isConfirm: boolean = false;
  isCancel: boolean = false;

  constructor(public router: Router) { }

  ngOnInit() {}

  Nouvelle() {
    this.router.navigate(['notification-page']);
    this.isNew =  true;
    this.isConfirm =  false;
    this.isCancel =  false;
  }

  Confirmer() {
    this.router.navigate(['confirmer']);
    this.isConfirm =  true;
    this.isNew =  false;
    this.isCancel =  false;
  }

  Annuler() {
    this.router.navigate(['annuler']);
    this.isCancel =  true;
    this.isConfirm =  false;
    this.isNew =  false;
  }

}
