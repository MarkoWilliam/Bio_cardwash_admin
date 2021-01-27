import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {}

  Nouvelle() {
    this.router.navigate(['notification-page']);
  }

  Confirmer() {
    this.router.navigate(['confirmer']);
  }

  Annuler() {
    this.router.navigate(['annuler']);
  }

}
