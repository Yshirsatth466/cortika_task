import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Imported Validators
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginforms!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ser: LoginserviceService,
    public router: Router
  ) {}

  ngOnInit(): void {
    // Initialize the form with validation rules
    this.loginforms = this.fb.group({
      id: ['', Validators.required], // ID is required
      name: ['', [Validators.required, Validators.minLength(3)]], // Name is required and must be at least 3 characters
      email: ['', [Validators.required, Validators.email]], // Email is required and must follow the correct email format
      address: ['', Validators.required], // Address is required
    });
  }

  saveuser() {
    // Check if the form is valid
    if (this.loginforms.valid) {
      this.ser.adduser(this.loginforms.value).subscribe();
      this.router.navigateByUrl('menu');
      alert('User login added successfully!');
    } else {
      alert('Please fill in all fields correctly.');
    }
  }
}
