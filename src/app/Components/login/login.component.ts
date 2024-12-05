import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginRequest, RegisterRequest } from '../../Models/login.model';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  modal: String = "";
  private builder = new FormBuilder();
  constructor(public router: Router, private loginSvc: LoginService){}

  loginForm = this.builder.group({
    Username: ["", [Validators.required, Validators.minLength(4)]],
    Password: ["", [Validators.required, Validators.minLength(8)]]
  });

  FormSubmit(){
    console.log(this.loginForm.value.Username)
    console.log(this.loginForm.value.Password)
    this.Login();
  }

  Login(){
    const login: LoginRequest = {
      Username: this.loginForm.value.Username!,
      Password: this.loginForm.value.Password!
    }
    this.loginSvc.Login(login).subscribe((result) =>{
      console.log(result)
      if(!result.isValid){
        this.modal = result.Message;        
      }
      else{
        this.modal = result.Message;
        let token = result.value.refreshToken;
        localStorage.setItem("Token", token);
      }
      console.log(this.modal)
    })
  }

  Register(){
    const register: RegisterRequest = {
      Username: this.loginForm.value.Username!,
      Password: this.loginForm.value.Password!
    }
    this.loginSvc.Register(register).subscribe((result) => {
      this.modal = result.Message;
      console.log(this.modal)
    })
  }
}
