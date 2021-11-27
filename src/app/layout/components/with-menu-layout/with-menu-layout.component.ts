import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { UserProvider } from 'src/app/core/providers/user.provider';

@Component({
  selector: 'app-with-menu-layout',
  templateUrl: './with-menu-layout.component.html',
  styleUrls: ['./with-menu-layout.component.scss'],
})
export class WithMenuLayoutComponent implements OnInit {

  routerSubscription: Subscription;
  constructor(private router: Router, private userProvider: UserProvider) { }

  public pages = [
    { title: 'Sales', url: '/sales', icon: 'heart' },
    { title: 'Customers', url: '/cutomers', icon: 'mail' },
    { title: 'Reciepts', url: '/reciepts', icon: 'heart' },
    { title: 'Products', url: '/products', icon: 'paper-plane' },
    { title: 'Reports', url: '/reports', icon: 'archive' },
  ];
  public labels = [ 'Settings', 'Logout',];

  ngOnInit() {
  }

  logout(){
    this.userProvider.Clear();
    this.router.navigateByUrl('login');
  }
}
