import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as CanvasJS from '../../assets/canvasjs.min.js';
import { DispositivoService } from '../common/services/dispositivo.service.js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-live-time',
  templateUrl: './live-time.component.html',
  styleUrls: ['./live-time.component.css']
})
export class LiveTimeComponent implements OnInit {

  constructor(private dispositivoService: DispositivoService,
    private route: ActivatedRoute) { }

  dispositivoID: string = "";

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.dispositivoID = params.get("dispositivoId");
    });

    let dataPoints_humo = [];
    let dataPoints_co2 = [];
    let last_date: Date;

    let chart_humo = new CanvasJS.Chart("chartEtyleno", {
      exportEnabled: true,
      title: {
        text: "Ethylene ppm"
      },
      data: [{
        type: "spline",
        dataPoints: dataPoints_humo,
      }]
    });

    let chart_co2 = new CanvasJS.Chart("chartCO2", {
      exportEnabled: true,
      title: {
        text: "CO2 ppm"
      },
      data: [{
        type: "spline",
        dataPoints: dataPoints_co2,
      }]
    });

    this.dispositivoService.getLastData(this.dispositivoID).then((res: any) => {
      let date = new Date(parseInt(res.body.timestamp));
      last_date = date;
      dataPoints_humo.push({ x: date, y: parseInt(res.body.sensorHumo) });
      dataPoints_co2.push({ x: date, y: parseInt(res.body.sensorCO2) });
      chart_humo.render();
      chart_co2.render();
      updateChart(this.dispositivoService, this.dispositivoID);
    });

    function updateChart(dispositivoService: DispositivoService, dispositivoID: string) {
      dispositivoService.getLastData(dispositivoID).then((res: any) => {
        let date = new Date(parseInt(res.body.timestamp));
        if (last_date != date) {
          dataPoints_humo.push({ x: date, y: parseInt(res.body.sensorHumo) });
          dataPoints_co2.push({ x: date, y: parseInt(res.body.sensorCO2) });
          if (dataPoints_co2.length > 20)
            dataPoints_co2.shift();

          if (dataPoints_humo.length > 20)
            dataPoints_humo.shift();

          chart_humo.render();
          chart_co2.render();
          setTimeout(function () { updateChart(dispositivoService, dispositivoID) }, 60000);
        }
      }).catch((res: any) => {
        console.log("Error: " + res);
      });

    }

  }

}

