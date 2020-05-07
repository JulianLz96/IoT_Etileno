import { Component, OnInit, AfterContentInit } from '@angular/core';
import { DispositivoService } from '../common/services/dispositivo.service';
import Amplify, { Auth } from 'aws-amplify';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.css']
})
export class DispositivosComponent implements OnInit, AfterContentInit {

  devicesID: Array<String> = [];
  displayedColumns: string[];
  deviceID: String = "";
  show: boolean = true;
  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';
  show_spinner: boolean = true;

  constructor(private dispositivosService: DispositivoService) { }

  ngOnInit(): void {

  }

  addDevice() {
    this.dispositivosService.addDevice(localStorage.getItem('email'), this.deviceID).then(res => {
      console.log(res);
      this.ngAfterContentInit();
      this.deviceID = '';
    })
      .catch(err => {
        console.log(err);
      });
  }

  ngAfterContentInit() {
    this.displayedColumns = ['deviceID'];
    var that = this;
    setTimeout(function () {
      that.dispositivosService.getDispositivos(localStorage.getItem('email')).then(res => {
        that.show = false;
        that.show_spinner = false;
        let bdy = JSON.parse(res.body);
        console.log(bdy);
        that.devicesID = bdy;
      })
        .catch(err => {
          console.log(err);
        });
    }, 2000);
    //this.devicesID = this.dispositivosService.getDispositivosMocked(localStorage.getItem('email'));
  }

}
