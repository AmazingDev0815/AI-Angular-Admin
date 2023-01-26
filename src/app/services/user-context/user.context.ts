import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserContext {
  constructor() {
  }
  AccessToken = localStorage.getItem("accessToken");
  IsAuthenticated() : boolean {
    return  this.AccessToken != null;
  }

  setAccessToken(accessToken: string){
    localStorage.setItem("accessToken", accessToken);
  }

  clearAccessToken(){
    localStorage.removeItem("accessToken");
  }
}
