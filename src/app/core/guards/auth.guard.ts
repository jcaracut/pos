import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { UserProvider } from '../providers/user.provider';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private alertController: AlertController, private userProvider: UserProvider) { }

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return this.userProvider.isAuthenticated();

    return new Promise((resolve, reject) => {
      this.userProvider.isAuthenticated().then(isAuth => {
        if (isAuth) {
          resolve(true)
        } else {
          this.router.navigate(['/welcome']);
          resolve(false);
        }
      }).catch(() => reject());
    })
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Message',
      message: 'Session expired! Please login again.',
      buttons: [
        {
          text: 'Cancel',
        }, {
          text: 'Login',
          handler: async () => {
            this.router.navigate(['/login']);
          }
        }
      ]
    });

    await alert.present();
  }
}
