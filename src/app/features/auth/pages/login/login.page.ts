import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, NavController, Platform } from '@ionic/angular';
import { ICommonResponse } from 'src/app/core/models/common-response.model';
import { UserProvider } from 'src/app/core/providers/user.provider';
import { AlertService } from 'src/app/shared/services/alert.service';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  device_width: number;
  loginForm: FormGroup;
  isShowPassword = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userProvider: UserProvider,
    private authSvc: AuthService,
    private loadingCtrl: LoadingController,
    private alertSvc: AlertService,
    
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  get f() { return this.loginForm.controls; }

  async login() {
    if (this.loginForm.valid) {
      const loading = await this.loadingCtrl.create({
        message: 'Logging in...',
      });
      await loading.present();
      this.authSvc.login(this.loginForm.value).subscribe(async response => {
        const user = response.data as User;
        this.userProvider.Set(user);
        await loading.dismiss();
        this.loginForm.reset();
        this.router.navigateByUrl("home");
      }, async err => {
        await loading.dismiss();
        console.log(err)
        await this.alertSvc.presentAlert('Login failed', "The provided credentials do not match our records.");
      });
    }

  }

}
