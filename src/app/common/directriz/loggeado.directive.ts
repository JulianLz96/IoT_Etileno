import { Directive, AfterViewInit, Input, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appLoggeado]'
})
export class LoggeadoDirective implements AfterViewInit{

  constructor(private auth:AuthService,
              private eR:ElementRef) { }

  @Input() appLoggeado:string;

  ngAfterViewInit() {
    if(this.auth.isLoggeIn()) {
      if(this.eR.nativeElement.getAttribute('id') != "logOut")
        this.eR.nativeElement.remove();
    } else {
      if(this.eR.nativeElement.getAttribute('id') == "logOut")
        this.eR.nativeElement.remove();
    }
  }

}
