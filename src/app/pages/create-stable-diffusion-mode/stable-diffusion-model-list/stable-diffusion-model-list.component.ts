import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api/api.service";

@Component({
  selector: 'app-stable-diffusion-model-list',
  templateUrl: './stable-diffusion-model-list.component.html',
  styleUrls: ['./stable-diffusion-model-list.component.css']
})
export class StableDiffusionModelListComponent implements OnInit {
  models: any[] = [];

  constructor(private apiService:ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getStableDiffusionModels().subscribe((data:any)=>{
      this.models = data.items;
    })
  }

}
