import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-with-menu-layout',
  templateUrl: './with-menu-layout.component.html',
  styleUrls: ['./with-menu-layout.component.scss'],
})
export class WithMenuLayoutComponent implements OnInit, OnDestroy {

  routerSubscription: Subscription;
  constructor(private router: Router, private menu: MenuController) { }

  ngOnInit() {
    this.routerSubscription = this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.menu.close();
      }
    });
  }

  onClickMenu() {
    this.menu.close();
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

}
