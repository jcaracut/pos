import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Browser } from '@capacitor/browser';
import { Capacitor } from '@capacitor/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { IJWTDecoded } from 'src/app/core/models/jwt-decoded.model';
import { AuthStorageService } from 'src/app/core/services/auth-storage.service';
import { CommonService } from 'src/app/core/services/common.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { AuthService } from 'src/app/features/auth/services/auth.service';
import { SettingsModalComponent } from 'src/app/shared/components/settings-modal/settings-modal.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  @Output() menuClicked = new EventEmitter<void>();

  currentUser: IJWTDecoded;
  accountPages = [
    {
      title: 'Nearest Deals',
      url: '/nearest-deals',
      ionicIcon: 'restaurant-outline'
    },
    // {
    //   title: 'Favorites',
    //   url: '/favorites',
    //   ionicIcon: 'star-outline'
    // },
  ];
  constructor(private authStorageSvc: AuthStorageService,
    private storageSvc: StorageService,
    private modalController: ModalController,
    private alertController: AlertController,
    private commonSvc: CommonService,
    private navCtrl: NavController,
    private authSvc: AuthService,) { }

  async ngOnInit() {
    this.currentUser = await this.authStorageSvc.getJTWDecoded();
    this.commonSvc.onUserChanged.subscribe(async _ => {
      this.currentUser = await this.authStorageSvc.getJTWDecoded();
    });
  }

  async onLogout() {
    await this.presentAlertConfirm();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm Logout',
      message: 'Are you sure you want to logout',
      buttons: [
        {
          text: 'No',
        }, {
          text: 'Yes',
          handler: async () => {
            this.authSvc.logout().subscribe(console.log);
            await this.authStorageSvc.purge();
            this.commonSvc.userChange();
            this.navCtrl.navigateForward('login');
          }
        }
      ]
    });

    await alert.present();
  }

  onLogin() {
    this.navCtrl.navigateForward('login');
  }

  clickMenu() {
    this.menuClicked.emit();
  }

  async openSettings() {
    this.menuClicked.emit();
    const radius = await this.storageSvc.get('radius');
    const modal = await this.modalController.create({
      component: SettingsModalComponent,
      swipeToClose: true,
      componentProps: {
        radius: radius ?? 50
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    this.storageSvc.set('radius', data.radius);
  }

  async openPrivacyPolicy() {
    const url = environment.portalUrl + '/privacy-policy';

    if (Capacitor.isPluginAvailable('Browser')) {
      await Browser.open({ url });
    } else {
      window.open(url, '_blank');
    }
  }
}
