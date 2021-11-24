import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-with-menu-layout',
  templateUrl: './with-menu-layout.component.html',
  styleUrls: ['./with-menu-layout.component.scss'],
})
export class WithMenuLayoutComponent implements OnInit {

  routerSubscription: Subscription;
  constructor(private router: Router) { }

  public pages = [
    { title: 'Customers', url: '/cutomers', icon: 'mail' },
    { title: 'Products', url: '/products', icon: 'paper-plane' },
    { title: 'Sales', url: '/sales', icon: 'heart' },
    { title: 'Reports', url: '/reports', icon: 'archive' },
  ];
  public labels = ['Customers', 'Products', 'Sales', 'Reports',];

  ngOnInit() {
  }

  logout(){
    this.router.navigateByUrl('login');
  }

  // onClickMenu() {
  //   this.menu.close();
  // }

  // ngOnDestroy(): void {
  // }

}
