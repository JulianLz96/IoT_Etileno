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

  constructor(private dispositivosService:DispositivoService) { }

  ngOnInit(): void {
    this.displayedColumns = ['deviceID'];
    this.devicesID = this.dispositivosService.getDispositivosMocked(localStorage.getItem('email'));
  }

  

}
