import { Component, OnInit } from '@angular/core';
import { DispositivoService } from '../common/services/dispositivo.service';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.css']
})
export class DispositivosComponent implements OnInit {

  devicesID:Array<String> = [];
  displayedColumns: string[];
  deviceID:String = "";

  constructor(private dispositivosService:DispositivoService) { }

  ngOnInit(): void {
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

  addDevice() {
    this.dispositivosService.addDevice(localStorage.getItem('email'), this.deviceID).then(res => {
      console.log(res);
      this.ngOnInit();
    })
    .catch(err => {
      console.log(err);
    });
  }
  

}
