import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as CanvasJS from '../../assets/canvasjs.min.js';
import { DispositivoService } from '../common/services/dispositivo.service.js';
import { ActivatedRoute } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-live-time',
  templateUrl: './live-time.component.html',
  styleUrls: ['./live-time.component.css']
})
export class LiveTimeComponent implements OnInit {

  constructor(private dispositivoService: DispositivoService,
    private route: ActivatedRoute) { }

  dispositivoID: string = "";
  notFound:boolean = false;
  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';
  show_spinner:boolean = true;
  show_title:boolean = false;

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.dispositivoID = params.get("dispositivoId");
    });
    let that = this;
    setTimeout(() => {
      that.dispositivoService.getDispositivos(localStorage.getItem("email")).then(data => {
        let body: Array<String> = JSON.parse(data.body);
        if (body.find(device => device == that.dispositivoID) != undefined) {
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
  
          that.dispositivoService.getLastData(that.dispositivoID).then((res: any) => {
            let date = new Date(parseInt(res.body.timestamp));
            last_date = date;
            dataPoints_humo.push({ x: date, y: parseInt(res.body.sensorHumo) });
            dataPoints_co2.push({ x: date, y: parseInt(res.body.sensorCO2) });
            that.show_spinner = false;
            that.show_title = true;
            chart_humo.render();
            chart_co2.render();
            updateChart(that.dispositivoService, that.dispositivoID);
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
        else {
          that.show_spinner = false;
          document.querySelector('.container-inside').classList.add('hidden');
          that.notFound = true;
          console.log("not found"); 
        }
      }).catch(err => {
        console.log(err);
      });
    }, 1500);


  }

  show() {
    return this.show;
  }

}

