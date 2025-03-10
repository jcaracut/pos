import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import
Chart
  // ArcElement,
  // LineElement,
  // BarElement,
  // PointElement,
  // BarController,
  // BubbleController,
  // DoughnutController,
  // LineController,
  // PieController,
  // PolarAreaController,
  // RadarController,
  // ScatterController,
  // CategoryScale,
  // LinearScale,
  // LogarithmicScale,
  // RadialLinearScale,
  // TimeScale,
  // TimeSeriesScale,
  // Decimation,
  // Filler,
  // Legend,
  // Title,
  // Tooltip,
  // SubTitle
  from 'chart.js/auto';
import { UserProvider } from 'src/app/core/providers/user.provider';
import { Detail } from 'src/app/features/auth/models/user.model';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit, AfterViewInit {

  // @ViewChild('barCanvas') private barCanvas: ElementRef;
  @ViewChild('sales') private salesCanvas: ElementRef;
  @ViewChild('profits') private profitsCanvas: ElementRef;
  @ViewChild('orders') private ordersCanvas: ElementRef; 

  user: Detail
  barChart: any;
  salesChart: any;
  profitsChart: any;
  ordersChart: any;
  lineChart: any;

  constructor(private userProvider: UserProvider) { }

  async ngOnInit() {
    this.user = await (await this.userProvider.Get()).user;
  }

  // When we try to call our chart to initialize methods in ngOnInit() it shows an error nativeElement of undefined. 
  // So, we need to call all chart methods in ngAfterViewInit() where @ViewChild and @ViewChildren will be resolved.
  ngAfterViewInit() {
    // this.barChartMethod();
    this.initDoughnutCharts();
    // this.lineChartMethod();
  }

  // barChartMethod() {
  //   // Now we need to supply a Chart element reference with an object that defines the type of chart we want to use, and the type of data we want to display.
  //   this.barChart = new Chart(this.barCanvas.nativeElement, {
  //     type: 'bar',
  //     data: {
  //       labels: ['BJP', 'INC', 'AAP', 'CPI', 'CPI-M', 'NCP'],
  //       datasets: [{
  //         label: '# of Votes',
  //         data: [200, 50, 30, 15, 20, 34],
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 0.2)',
  //           'rgba(54, 162, 235, 0.2)',
  //           'rgba(255, 206, 86, 0.2)',
  //           'rgba(75, 192, 192, 0.2)',
  //           'rgba(153, 102, 255, 0.2)',
  //           'rgba(255, 159, 64, 0.2)'
  //         ],
  //         borderColor: [
  //           'rgba(255,99,132,1)',
  //           'rgba(54, 162, 235, 1)',
  //           'rgba(255, 206, 86, 1)',
  //           'rgba(75, 192, 192, 1)',
  //           'rgba(153, 102, 255, 1)',
  //           'rgba(255, 159, 64, 1)'
  //         ],
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         // yAxes: [{
  //         //   ticks: {
  //         //     beginAtZero: true
  //         //   }
  //         // }]
  //       }
  //     }
  //   });
  // }

  initDoughnutCharts() {
    this.salesChart = new Chart(this.salesCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        // labels: ['BJP', 'Congress', 'AAP', 'CPM', 'SP'],
        datasets: [{
          label: '# of Votes',
          data: [55, 100-55],
          backgroundColor: [
            'green',
            'transparent',
          ],
          // hoverBackgroundColor: [
          //   '#FFCE56',
          //   '#FF6384',
          // ]
        }]
      }
    });
    this.profitsChart = new Chart(this.profitsCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        // labels: ['BJP', 'Congress', 'AAP', 'CPM', 'SP'],
        datasets: [{
          label: '# of Votes',
          data: [55, 100-55],
          backgroundColor: [
            'green',
            'transparent',
          ],
          // hoverBackgroundColor: [
          //   '#FFCE56',
          //   '#FF6384',
          // ]
        }]
      }
    });
    this.ordersChart = new Chart(this.ordersCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        // labels: ['BJP', 'Congress', 'AAP', 'CPM', 'SP'],
        datasets: [{
          label: '# of Votes',
          data: [55, 100-55],
          backgroundColor: [
            'green',
            'transparent',
          ],
          // hoverBackgroundColor: [
          //   '#FFCE56',
          //   '#FF6384',
          // ]
        }]
      }
    });

  }

  // lineChartMethod() {
  //   this.lineChart = new Chart(this.lineCanvas.nativeElement, {
  //     type: 'line',
  //     data: {
  //       labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
  //       datasets: [
  //         {
  //           label: 'Sell per week',
  //           fill: false,
  //           lineTension: 0.1,
  //           backgroundColor: 'rgba(75,192,192,0.4)',
  //           borderColor: 'rgba(75,192,192,1)',
  //           borderCapStyle: 'butt',
  //           borderDash: [],
  //           borderDashOffset: 0.0,
  //           borderJoinStyle: 'miter',
  //           pointBorderColor: 'rgba(75,192,192,1)',
  //           pointBackgroundColor: '#fff',
  //           pointBorderWidth: 1,
  //           pointHoverRadius: 5,
  //           pointHoverBackgroundColor: 'rgba(75,192,192,1)',
  //           pointHoverBorderColor: 'rgba(220,220,220,1)',
  //           pointHoverBorderWidth: 2,
  //           pointRadius: 1,
  //           pointHitRadius: 10,
  //           data: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15],
  //           spanGaps: false,
  //         }
  //       ]
  //     }
  //   });
  // }

}
