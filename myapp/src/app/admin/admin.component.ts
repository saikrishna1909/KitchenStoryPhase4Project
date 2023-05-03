import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  data: any = [];

  constructor(private services: ServicesService) {}
  name = '';
  email = '';
  password = '';
  ngOnInit(): void {}
  onLogin(form: NgForm) {
    this.services.onAdminValidate().subscribe((data) => {
      this.data = JSON.parse(data);
    });
    if (
      this.data.email == form.value.email &&
      this.data.password == form.value.password
    ) {
      console.log('Valid credentials');
    } else {
      console.log('Invalid Credentials');
    }
  }
  onCPassword() {}
}
