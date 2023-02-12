import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api/api.service";

@Component({
  selector: 'app-prompt-list',
  templateUrl: './prompt-list.component.html',
  styleUrls: ['./prompt-list.component.css']
})
export class PromptListComponent implements OnInit {
  prompts: any[] = []

  constructor(private apiService: ApiService) {
  }
  ngOnInit(): void {
    this.getPrompts();
  }

  getPrompts(){
    this.apiService.getPrompts(false).subscribe((data:any)=>{
      this.prompts = data.items;
    })
  }
  delete(id:string) {
    this.apiService.deletePrompt(id).subscribe((data:any)=>{
      this.getPrompts();
    })
  }
}
