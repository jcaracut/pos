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

  canActivate() {
    if (this.authStorageSvc.isAuthenticated()) {
      return true;
    }
    // not logged in so redirect to login page with the return url and return false
    this.router.navigate(['/login']);
    return false;
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
