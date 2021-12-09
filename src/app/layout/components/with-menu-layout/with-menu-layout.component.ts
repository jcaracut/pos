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
    { title: 'Sales', url: '/sales', icon: 'assets/icons/sales_icon.png' },
    { title: 'Customers', url: '/customers', icon: 'assets/icons/customer_icon.png' },
    { title: 'Reciepts', url: '/reciepts', icon: 'assets/icons/reciepts_icon.png' },
    { title: 'Products', url: '/products', icon: 'assets/icons/product_icon.png' },
    { title: 'Reports', url: '/reports', icon: 'assets/icons/report_icon.png' },
  ];
  // public labels = [ 'Settings', 'Logout',];

  ngOnInit() {
  }

  logout(){
    this.userProvider.Clear();
    this.router.navigateByUrl('login');
  }
}
