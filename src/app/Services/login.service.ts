import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, RegisterRequest } from '../Models/login.model';
import { ReturnModel, TokenReturnModel } from '../Models/return.model';
import { GeneralReturnModel } from '../Models/return.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = "https://localhost:7081/api/Auth/"
  constructor(private http: HttpClient) { }

  Login(loginRequest: LoginRequest){
    return this.http.post<ReturnModel<TokenReturnModel>>(this.url + "login", loginRequest);
  }

  RefreshToken(){
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
    return this.http.post<ReturnModel<boolean>>(this.url + "refresh", token)
  }

  Logout(){  
    this.CheckLogOut();
    this.CheckLogOut().subscribe({next: (result) => {
      if(!result.isValid){
        return result.Message;
      }
      localStorage.clear();
      return result.Message
    }})
  }

  private CheckLogOut(){
    let Token = localStorage.getItem("Token");
    return this.http.post<ReturnModel<boolean>>(this.url, Token);
  }

  Register(request: RegisterRequest){
    return this.http.post<ReturnModel<TokenReturnModel>>(this.url + "register", request);
  }
}
