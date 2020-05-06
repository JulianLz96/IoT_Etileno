import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../assets/canvasjs.min.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // public chartType: string = 'line';
  // public chartDatasets: Array<any> = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' }
  // ];
  // public chartLabels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  // public chartColors: Array<any> = [
  //   {
  //     backgroundColor: 'rgba(220,220,220,0.2)', borderColor: 'rgba(220,220,220,1)', borderWidth: 2,
  //     pointBackgroundColor: 'rgba(220,220,220,1)', pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(220,220,220,1)'
  //   },
  //   {
  //     backgroundColor: 'rgba(151,187,205,0.2)', borderColor: 'rgba(151,187,205,1)', borderWidth: 2, pointBackgroundColor: 'rgba(151,187,205,1)',
  //     pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(151,187,205,1)'
  //   }];
  // public chartOptions: any = { responsive: true };
  // public chartClicked(e: any): void { }
  // public chartHovered(e: any): void { }

  ngOnInit() {
    let dataPoints = [];
    let dpsLength = 0;
    let chart = new CanvasJS.Chart("chartContainer", {
      exportEnabled: true,
      title: {
        text: "Live Chart of your Device"
      },
      data: [{
        type: "spline",
        dataPoints: dataPoints,
      }]
    });

    $.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=25&length=20&type=json&callback=?", function (data) {
      $.each(data, function (key, value) {
        dataPoints.push({ x: value[0], y: parseInt(value[1]) });
      });
      dpsLength = dataPoints.length;
      chart.render();
      updateChart();
    });
    function updateChart() {
      $.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=" + (dpsLength + 1) + "&ystart=" + (dataPoints[dataPoints.length - 1].y) + "&length=1&type=json&callback=?", function (data) {
        $.each(data, function (key, value) {
          dataPoints.push({
            x: parseInt(value[0]),
            y: parseInt(value[1])
          });
          dpsLength++;
        });

        if (dataPoints.length > 20) {
          dataPoints.shift();
        }
        chart.render();
        setTimeout(function () { updateChart() }, 1000);
      });
    }
  }
}