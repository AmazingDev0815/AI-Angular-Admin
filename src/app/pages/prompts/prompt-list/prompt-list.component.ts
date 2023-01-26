import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api/api.service";

@Component({
  selector: 'app-prompt-list',
  templateUrl: './prompt-list.component.html',
  styleUrls: ['./prompt-list.component.css']
})
export class PromptListComponent implements OnInit {
  items: any[] = []

  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.apiService.getPrompts().subscribe((data:any)=>{
      this.items = data.items;
    })
  }

}
