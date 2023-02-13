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

  getGoogleOAuthUrl(redirectUri:string){
    let url = `${this.BASE_URL}/authentication/oauth-url`;
    return this.httpClient.post(url,{
      "redirectUri": redirectUri,
      "type": 0
    });
  }

  getAccessToken(upn: string, password: string){
    let url = `${this.BASE_URL}/authentication/token`;
    return this.httpClient.post(url, {
      "upn": upn,
      "password": password
    });
  }

  getGoogleOAuthAccessToken(code: string, redirectUri: string){
    let url = `${this.BASE_URL}/authentication/oauth-token`;
    return this.httpClient.post(url, {
      "code": code,
      "redirectUri": redirectUri
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

  getPrompts(genderFilter: boolean){
    let url = `${this.BASE_URL}/admin/prompts?genderFilter=${genderFilter}&pageSize=100`;
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
    let formData = new FormData();

    formData.append("exampleImageFile", command.exampleImageFile);
    formData.append("initImageFile", command.initImageFile);
    formData.append("value", command.value);
    formData.append("negativeValue", command.negativeValue);
    formData.append("seed", command.seed?.toString());
    formData.append("numberOfInferenceSteps", command.numberOfInferenceSteps?.toString());
    formData.append("cfgScale", command.cfgScale?.toString());
    formData.append("denoisingStrength", command.denoisingStrength?.toString());

    command.tags.forEach(x=> {
      formData.append("tags", x);
    });
    let url = `${this.BASE_URL}/admin/prompts/text-to-image`;

    if (command.exampleImageFile?.size > 0){
      url = `${this.BASE_URL}/admin/prompts/image-to-image`;
    }

    let headers = new HttpHeaders({
      // @ts-ignore
      Authorization: this.userContext.AccessToken
    })
    return this.httpClient.post(url, formData, { headers });
  }
  getTasks(filterByUser: boolean){
    let url = `${this.BASE_URL}/generating-tasks?filterByUser=${filterByUser}&pageSize=100`;
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
    let url = `${this.BASE_URL}/generating-tasks/test`;
    let headers = new HttpHeaders({
      // @ts-ignore
      Authorization: this.userContext.AccessToken
    })
    return this.httpClient.post(url, command, { headers });
  }

  getImageCollections(filterByUser : boolean = false){
    let url = `${this.BASE_URL}/image-collections?FilterByUser=${filterByUser}`;
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
  getUserInfo(){
    let url = `${this.BASE_URL}/users/${this.userContext.Upn}`;
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
    command.gender = Number(command.gender)
    return this.httpClient.post(url,command, { headers });
  }

  getTags(){
    let url = `${this.BASE_URL}/tags`;
    let headers = new HttpHeaders({
      // @ts-ignore
      Authorization: this.userContext.AccessToken
    })
    return this.httpClient.get(url,{ headers });
  }

  getImageCollection(imageCollectionId: string | null){
    let url = `${this.BASE_URL}/image-collections/${imageCollectionId}`;
    let headers = new HttpHeaders({
      // @ts-ignore
      Authorization: this.userContext.AccessToken
    })
    return this.httpClient.get(url,{ headers });
  }

  getStableDiffusionModels() {
    let url = `${this.BASE_URL}/admin/stable-diffusion-models`;
    let headers = new HttpHeaders({
      // @ts-ignore
      Authorization: this.userContext.AccessToken
    })
    return this.httpClient.get(url,{ headers });
  }

  deleteUserPhoto(id: string) {
    let url = `${this.BASE_URL}/user-photos/${id}`;
    let headers = new HttpHeaders({
      // @ts-ignore
      Authorization: this.userContext.AccessToken
    })
    return this.httpClient.delete(url,{ headers });
  }

  stopTask(id: string) {
    let url = `${this.BASE_URL}/generating-tasks/${id}/cancel`;
    let headers = new HttpHeaders({
      // @ts-ignore
      Authorization: this.userContext.AccessToken
    })
    return this.httpClient.put(url,{ headers });
  }

  createStableDiffusionModel(command: any) {
    let url = `${this.BASE_URL}/admin/stable-diffusion-models`;
    let headers = new HttpHeaders({
      // @ts-ignore
      Authorization: this.userContext.AccessToken
    })
    return this.httpClient.post(url, command,{ headers });
  }

  increaseImageResolution(id: string) {
    let url = `${this.BASE_URL}/images/${id}/increase-resolution`;
    let headers = new HttpHeaders({
      // @ts-ignore
      Authorization: this.userContext.AccessToken
    })
    return this.httpClient.put(url,{ headers });
  }

  getNumberOfAvailableInstances() {
    let url = `${this.BASE_URL}/gpu-instances/available-count`;
    let headers = new HttpHeaders({
      // @ts-ignore
      Authorization: this.userContext.AccessToken
    })
    return this.httpClient.get(url,{ headers });
  }

  depositPayment(sessionId: string | null) {
    let url = `${this.BASE_URL}/payment/${sessionId}`;
    let headers = new HttpHeaders({
      // @ts-ignore
      Authorization: this.userContext.AccessToken
    })
    return this.httpClient.post(url,{} ,{ headers });
  }
}
