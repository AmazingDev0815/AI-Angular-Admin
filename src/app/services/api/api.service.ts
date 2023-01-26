import { Injectable } from '@angular/core';
import {UserContext} from "../user-context/user.context";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {NzUploadFile} from "ng-zorro-antd/upload";
import {CreateGeneratingTaskCommand} from "../../model/create-generating-task-command";
import {CreatePromptCommand} from "../../model/create-prompt-command";
import {CreateUserCommand} from "../../model/create-user-command";

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  BASE_URL: string = environment.BASE_URL;

  constructor(private httpClient: HttpClient, private userContext: UserContext) {

  }

  getAccessToken(upn: string, password: string){
    let url = `${this.BASE_URL}/authentication/token`;
    return this.httpClient.post(url, {
      "upn": upn,
      "password": password
    });
  }

  uploadUserPhotos(files: NzUploadFile[]){
    let url = `${this.BASE_URL}/user-photos`;
    let formData = new FormData();
    files.forEach(x => {
      // @ts-ignore
      formData.append('files', x.originFileObj);
    })
    let headers = new HttpHeaders({
      // @ts-ignore
      Authorization: this.userContext.AccessToken
    })
    return this.httpClient.post(url, formData, { headers });
  }

  getUserPhotos(){
    let url = `${this.BASE_URL}/user-photos?pageSize=100`;
    let headers = new HttpHeaders({
      // @ts-ignore
      Authorization: this.userContext.AccessToken
    })
    return this.httpClient.get(url,{ headers });
  }

  getPrompts(){
    let url = `${this.BASE_URL}/admin/prompts?pageSize=100`;
    let headers = new HttpHeaders({
      // @ts-ignore
      Authorization: this.userContext.AccessToken
    })
    return this.httpClient.get(url,{ headers });
  }

  deletePrompt(id:string){
    let url = `${this.BASE_URL}/admin/prompts/${id}`;
    let headers = new HttpHeaders({
      // @ts-ignore
      Authorization: this.userContext.AccessToken
    })
    return this.httpClient.delete(url,{ headers });
  }

  createPrompt(command: CreatePromptCommand){
    let url = `${this.BASE_URL}/admin/prompts`;
    let headers = new HttpHeaders({
      // @ts-ignore
      Authorization: this.userContext.AccessToken
    })
    return this.httpClient.post(url,command, { headers });
  }
  getTasks(){
    let url = `${this.BASE_URL}/generating-tasks?pageSize=100`;
    let headers = new HttpHeaders({
      // @ts-ignore
      Authorization: this.userContext.AccessToken
    })
    return this.httpClient.get(url,{ headers });
  }

  getTask(taskId:string){
    let url = `${this.BASE_URL}/generating-tasks/${taskId}`;
    let headers = new HttpHeaders({
      // @ts-ignore
      Authorization: this.userContext.AccessToken
    })
    return this.httpClient.get(url,{ headers });
  }
  createTask(command: CreateGeneratingTaskCommand){
    let url = `${this.BASE_URL}/generating-tasks`;
    let headers = new HttpHeaders({
      // @ts-ignore
      Authorization: this.userContext.AccessToken
    })
    return this.httpClient.post(url, command, { headers });
  }

  getImageCollections(){
    let url = `${this.BASE_URL}/image-collections`;
    let headers = new HttpHeaders({
      // @ts-ignore
      Authorization: this.userContext.AccessToken
    })
    return this.httpClient.get(url,{ headers });
  }

  getUsers(){
    let url = `${this.BASE_URL}/admin/users`;
    let headers = new HttpHeaders({
      // @ts-ignore
      Authorization: this.userContext.AccessToken
    })
    return this.httpClient.get(url,{ headers });
  }

  createUser(command: CreateUserCommand){
    let url = `${this.BASE_URL}/admin/users`;
    let headers = new HttpHeaders({
      // @ts-ignore
      Authorization: this.userContext.AccessToken
    })
    return this.httpClient.post(url,command,{ headers });
  }

  getTags(){
    let url = `${this.BASE_URL}/tags`;
    let headers = new HttpHeaders({
      // @ts-ignore
      Authorization: this.userContext.AccessToken
    })
    return this.httpClient.get(url,{ headers });
  }

  getImageCollection(imageCollectionId: string){
    let url = `${this.BASE_URL}/image-collections/${imageCollectionId}`;
    let headers = new HttpHeaders({
      // @ts-ignore
      Authorization: this.userContext.AccessToken
    })
    return this.httpClient.get(url,{ headers });
  }
}
