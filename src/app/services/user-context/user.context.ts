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
    return localStorage.getItem("accessToken") != null;
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
