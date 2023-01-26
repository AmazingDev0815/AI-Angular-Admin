import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api/api.service";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  tasks: any[] = []
  constructor(private apiService:ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getTasks().subscribe((data:any)=>{
      this.tasks = data.items;
    })
  }

}
