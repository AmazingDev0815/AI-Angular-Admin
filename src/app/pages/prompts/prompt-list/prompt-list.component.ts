import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api/api.service";

@Component({
  selector: 'app-prompt-list',
  templateUrl: './prompt-list.component.html',
  styleUrls: ['./prompt-list.component.css']
})
export class PromptListComponent implements OnInit {
  prompts: any[] = []
  promptList : any[] = []
  selectedTags: string[] = [];
  tags : string[] = [];
  constructor(private apiService: ApiService) {
  }
  ngOnInit(): void {
    this.getPrompts();
    this.apiService.getTags().subscribe((data:any)=>{
      this.tags = data.items.map((x:any) => x.name);
    });
  }

  getPrompts(){
    this.apiService.getPrompts(false).subscribe((data:any)=>{
      this.promptList = data.items;
      this.prompts = this.promptList;
    })
  }
  delete(id:string) {
    this.apiService.deletePrompt(id).subscribe((data:any)=>{
      this.getPrompts();
    })
  }

  isNotSelected(value: string): boolean {
    return this.selectedTags.indexOf(value) === -1;
  }

  search() {
    this.prompts = this.promptList.filter(p => this.selectedTags.length == 0  ||
      this.selectedTags.every((x:any) => p.tags.includes(x)));
    console.log(this.prompts)
  }
}
