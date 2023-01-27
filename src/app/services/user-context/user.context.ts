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
  IsAuthenticated() : boolean {
    return localStorage.getItem("accessToken") != null;
  }

  setAccessToken(accessToken: string){
    localStorage.setItem("accessToken", accessToken);
  }

  clearAccessToken(){
    localStorage.removeItem("accessToken");
  }
}
