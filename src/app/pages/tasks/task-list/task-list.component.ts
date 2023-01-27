import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api/api.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = []
  constructor(private apiService:ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getTasks().subscribe((data:any)=>{
      this.tasks = data.items;
    })
  }

  stop(id:string) {
    this.apiService.stopTask(id).subscribe((data:any)=>{
    })
  }
}
