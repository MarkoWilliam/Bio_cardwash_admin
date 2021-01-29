import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-annuler',
  templateUrl: './annuler.page.html',
  styleUrls: ['./annuler.page.scss'],
})
export class AnnulerPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  compte() {
    this.router.navigate(['compte']);
  }


}
