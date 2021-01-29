import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.page.html',
  styleUrls: ['./demande.page.scss'],
})
export class DemandePage implements OnInit {


  isNew: boolean =  false;
  isConfirm: boolean = false;
  isCancel: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  Nouvelle() { 
    this.isNew =  true;
    this.isConfirm =  false;
    this.isCancel =  false;
  }

  Confirmer() { 
    this.isConfirm =  true;
    this.isNew =  false;
    this.isCancel =  false;
  }

  Annuler() { 
    this.isCancel =  true;
    this.isConfirm =  false;
    this.isNew =  false;
  }

}
