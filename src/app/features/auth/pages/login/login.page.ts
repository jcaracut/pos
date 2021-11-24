import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, NavController, Platform } from '@ionic/angular';
import { ICommonResponse } from 'src/app/core/models/common-response.model';
import { AuthStorageService } from 'src/app/core/services/auth-storage.service';
import { CommonService } from 'src/app/core/services/common.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  device_width: number;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private platform: Platform,
    private authSvc: AuthService,
    private authStorage: AuthStorageService,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private commonSvc: CommonService,
    private alertSvc: AlertService,
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.device_width = this.platform.width();
    console.log(this.device_width)
  }

  get f() { return this.loginForm.controls; }

  async login() {
    this.router.navigateByUrl("home");
    // if (this.loginForm.valid) {
    //   const loading = await this.loadingCtrl.create({
    //     message: 'Logging in...',
    //   });
    //   await loading.present();
    //   this.authSvc.login(this.loginForm.value).subscribe(async response => {
    //     const user = response.data as User;
    //     // const decoded = this.authStorage.parseJwt(user.token);

    //     // console.log(decoded)
    //     await loading.dismiss();
    //     await this.authStorage.saveTokenResponse(user.token);
    //     this.loginForm.reset();

    //     this.router.navigateByUrl("home");
    //     // this.commonSvc.userChange();
    //     // this.navCtrl.navigateRoot('/');
    //   }, async err => {
    //     console.log(err, "errr")
    //     await loading.dismiss();
    //     const response = err.error as ICommonResponse;
    //     await this.alertSvc.presentAlert('Login failed', err);
    //   });
    // }

  }

}
