import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {

  constructor(private httpClient:HttpClient) { }

  getLastData(deviceID:string):Promise<any> {
      const url2 = `${environment.url_base}/${deviceID}`;
      const url = 'https://i3vahk4356.execute-api.us-east-1.amazonaws.com/Test/' + deviceID;
      return this.httpClient.get(url2).toPromise();
  }

  getDispositivos(email:string):Promise<any> {
    const url = `${environment.url_cuentas}/${email}`;
    return this.httpClient.get(url).toPromise();
  }

  getDispositivosMocked(email:string):Array<String> {
    const devices:Array<String> = [ "12340", "12345"];
    return devices;
  }

  addDevice(email:String, deviceID:String) {
    const url = `${environment.url_cuentas}/${email}/${deviceID}`;
    return this.httpClient.post(url, {}).toPromise();
  }
}
