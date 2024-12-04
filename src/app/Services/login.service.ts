import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../Models/login.model';
import { ReturnModel, TokenReturnModel } from '../Models/return.model';
import { GeneralReturnModel } from '../Models/return.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = "https://localhost:7081/api/Auth/login"
  constructor(private http: HttpClient) { }

  login(loginRequest: LoginRequest){
    return this.http.post<ReturnModel<TokenReturnModel>>(this.url, loginRequest);
  }

  refreshToken(){
    if(this.verifyIsLogged()){
      this.CheckRefreshToken().subscribe({next: (response) => {
        if(response.isValid){
          return true
        }
        else{
          return false
        }
      }})
    }
    return false
  }

  private verifyIsLogged(){
    let token = localStorage.getItem("Token");
    return token != null;
  }

  private CheckRefreshToken(){
    let token = localStorage.getItem("Token");
    return this.http.post<ReturnModel<boolean>>(this.url, token)
  }
}
