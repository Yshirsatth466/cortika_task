import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Added Validators
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  menuforms!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ser: LoginserviceService,
    public router: Router
  ) {}

  ngOnInit(): void {
    // Initialize the form with max validation of 2 for each field
    this.menuforms = this.fb.group({
      pasta: [null, [Validators.min(0), Validators.max(2)]],  // Added validation for max 2
      nodels: [null, [Validators.min(0), Validators.max(2)]], // Added validation for max 2
      pizza: [null, [Validators.min(0), Validators.max(2)]],  // Added validation for max 2
    });
  }

  savemenu() {
    // Only proceed if the form is valid
    if (this.menuforms.valid) {
      this.ser.addmenu(this.menuforms.value).subscribe();
      this.router.navigateByUrl('displayinfo');
      alert('User menu added successfully!');
    } else {
      alert('Please select a valid quantity (0-2) for each item.');
    }
  }
}
