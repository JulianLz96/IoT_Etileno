import { Component, OnInit, AfterContentInit } from '@angular/core';
import { DispositivoService } from '../common/services/dispositivo.service';
import Amplify, { Auth } from 'aws-amplify';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.css']
})
export class DispositivosComponent implements OnInit, AfterContentInit {

  devicesID:Array<String> = [];
  displayedColumns: string[];
  deviceID:String = "";

  constructor(private dispositivosService:DispositivoService) { }

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
    //this.devicesID = this.dispositivosService.getDispositivosMocked(localStorage.getItem('email'));
    this.dispositivosService.getDispositivos(localStorage.getItem('email')).then(res => {
      let bdy = JSON.parse(res.body);
      console.log(bdy);
      this.devicesID=bdy;
    })
    .catch(err => {
      console.log(err);
    });
  }

}
