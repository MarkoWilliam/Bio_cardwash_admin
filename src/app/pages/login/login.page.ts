import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalServiceService } from 'src/app/service/Globale/global-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public global: GlobalServiceService,
    public router: Router,
  ) { }

  ngOnInit() {
  }

  connextion(){
    this.global.connected = true;
    this.router.navigate(['notification-page']);
  }


}
