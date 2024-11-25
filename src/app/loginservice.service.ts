import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginserviceService {

  constructor(public http: HttpClient) {}

  // Add user to the database
  adduser(s: any) {
    return this.http.post('http://localhost:3000/user', s);
  }

  // Add menu item to the database
  addmenu(s: any) {
    return this.http.post('http://localhost:3000/menu', s);
  }

  // Get all menu items
  getmenu() {
    return this.http.get('http://localhost:3000/menu');
  }

  // Get user details
  getname() {
    return this.http.get('http://localhost:3000/user');
  }

  // Get snacks details (assuming snacks are stored in the API)
  getsnacks() {
    return this.http.get('http://localhost:3000/snacks'); // Make sure the API endpoint exists
  }
}
