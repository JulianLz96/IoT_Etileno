import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as CanvasJS from '../../assets/canvasjs.min.js';

@Component({
  selector: 'app-live-time',
  templateUrl: './live-time.component.html',
  styleUrls: ['./live-time.component.css']
})
export class LiveTimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let dataPoints = [];
    let dpsLength = 0;
    let chart = new CanvasJS.Chart("chartContainer", {
      exportEnabled: true,
      title: {
        text: "It woooooooooorks"
      },
      data: [{
        type: "spline",
        dataPoints: dataPoints,
      }]
    });

    let chart2 = new CanvasJS.Chart("chartContainer2", {
      exportEnabled: true,
      title: {
        text: "It woooooooooorks"
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
      chart2.render();
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
        chart2.render();
        setTimeout(function () { updateChart() }, 1000);
      });
    }
  }

}
