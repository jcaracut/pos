import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertController: AlertController) { }

  async presentAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      message,
      header: title,
      buttons: ['OK']
    });

    await alert.present();

  }
}
