import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthStorageService } from '../services/auth-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authStorageSvc: AuthStorageService, private alertController: AlertController,) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authStorageSvc.isAuthenticated().then(value => {
      console.log("loginnn");
      if (value) {
        return true;
      }
      // not logged in so redirect to login page with the return url and return false
      this.router.navigate(['/login']);
      
      return false;

    });
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
