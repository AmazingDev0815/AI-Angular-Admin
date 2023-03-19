import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserContext {

  constructor() {
  }

  get AccessToken(): string | null{
    return localStorage.getItem("accessToken")
  }
  get Upn(): string | null{
    return localStorage.getItem("upn")
  }

  IsAuthenticated() : boolean {
    let token = localStorage.getItem("accessToken");
    if (token == null){
      return false;
    }
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    console.log(expiry);
    let valid = (Math.floor((new Date).getTime() / 1000)) >= expiry;
    return valid;
  }

  setAccessToken(accessToken: string){
    localStorage.setItem("accessToken", accessToken);
  }

  setUpn(upn: string){
    localStorage.setItem("upn", upn);
  }

  clearAccessToken(){
    localStorage.removeItem("accessToken");
    this.clearUpn();
  }

  clearUpn(){
    localStorage.removeItem("upn");
  }
}
