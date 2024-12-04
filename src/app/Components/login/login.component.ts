import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private builder = new FormBuilder();
  constructor(public router: Router, private loginSvc: LoginService){}

  loginForm = this.builder.group({
    Username: ["", [Validators.required, Validators.minLength(4)]],
    Password: ["", [Validators.required, Validators.minLength(8)]]
  });
}
