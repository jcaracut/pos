import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnDestroy {
  sliderOptions = {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    }
  };

  slides = [
    {
      icon: "assets/icons/icon_1.png",
      title: "Gain total control of your money",
      description: "Become your own money manager and make every cent count"
    },
    {
      icon: "assets/icons/icon_2.png",
      title: "Know where your money goes",
      description: "Track your transactions easily, with categories and financial report"
    },
    {
      icon: "assets/icons/icon_3.png",
      title: "Planning ahead",
      description: "Setup your budget for each category so your in control"
    }
  ]

  constructor(private router: Router) { }

  login(){
    this.slides = [];
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }

  ngOnDestroy(): void{
    
  }

}
