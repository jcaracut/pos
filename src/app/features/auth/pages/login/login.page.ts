import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  device_width: number

  constructor(
    private router: Router,
    private platform: Platform
    ) { }

  ngOnInit() {
    this.device_width = this.platform.width();
    console.log(this.device_width)
  }

  login(){
    this.router.navigateByUrl("home");
  }

}
