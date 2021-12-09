import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-sales-revenue',
  templateUrl: './sales-revenue.page.html',
  styleUrls: ['./sales-revenue.page.scss'],
})
export class SalesRevenuePage implements OnInit, AfterViewInit {
  @ViewChild('barCanvas') private barCanvas: ElementRef;
  barChart: any;

  labels = [
    {
      title: 'Sales',
      value: '230k',
      icon: 'assets/icons/sales_icon2.png'
    },
    {
      title: 'Customers',
      value: '230k',
      icon: 'assets/icons/customer_icon.png'
    },
    {
      title: 'Products',
      value: '230k',
      icon: 'assets/icons/product_icon.png'
    },
    {
      title: 'Revenue',
      value: '230k',
      icon: 'assets/icons/report_icon.png'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initLineChart();
  }

  initLineChart() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            // label: 'Sell per week',
            // fill: false,
            // lineTension: 0.1,
            // backgroundColor: 'rgba(75,192,192,0.4)',
            // borderColor: 'rgba(75,192,192,1)',
            // borderCapStyle: 'butt',
            // borderDash: [],
            // borderDashOffset: 0.0,
            // borderJoinStyle: 'miter',
            // pointBorderColor: 'rgba(75,192,192,1)',
            // pointBackgroundColor: '#fff',
            // pointBorderWidth: 1,
            // pointHoverRadius: 5,
            // pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            // pointHoverBorderColor: 'rgba(220,220,220,1)',
            // pointHoverBorderWidth: 2,
            // pointRadius: 1,
            // pointHitRadius: 10,
            data: [65, 59, 80, 81, 56],
            // spanGaps: false,
          }
        ]
      }
    });
  }

}
