import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalServiceService } from 'src/app/service/Globale/global-service.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss'],
})
export class HeadersComponent implements OnInit {

  constructor(
    public global: GlobalServiceService,
    public router :Router
  ) { }

  ngOnInit(
  ) {}

  notif() {
 this.router.navigate(['notification-page'])
  }

  conexion(){
    if(this.global.connected) {
     this.router.navigate(['compte']);
    } else {
      this.router.navigate(['login']);
    }
  }

}
