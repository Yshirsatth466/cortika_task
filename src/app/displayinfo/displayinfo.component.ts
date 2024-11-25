import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-displayinfo',
  templateUrl: './displayinfo.component.html',
  styleUrls: ['./displayinfo.component.css'],
})
export class DisplayinfoComponent {
  name: any;
  menu: any;

  constructor(private ser: LoginserviceService, public router: Router) {
    this.ser.getname().subscribe((n: any) => {
      this.name = n;
    });
    this.ser.getmenu().subscribe((m: any) => {
      this.menu = m;
      console.log('Menu data:', m); // Log the response to inspect the structure
    });
  }
}
