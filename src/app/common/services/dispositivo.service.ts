import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DispositivoService {

  constructor(private httpClient:HttpClient) { }

  getLastData(deviceID:string):Promise<any> {
    //const url = `${environment.url}queue/${queueToken}`;
      const url = 'https://i3vahk4356.execute-api.us-east-1.amazonaws.com/Test/' + deviceID;
      return this.httpClient.get(url).toPromise();
  }
}
