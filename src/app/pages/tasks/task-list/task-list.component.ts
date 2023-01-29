import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "../../../services/api/api.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnDestroy {
  tasks: any[] = []
  interval: any
  constructor(private apiService:ApiService) {
  }

  ngOnInit(): void {
    this.load();
    this.interval = setInterval( this.load, 5000)
  }

  ngOnDestroy(): void {
    this.load();
    clearInterval(this.interval)
  }

  stop(id:string) {
    this.apiService.stopTask(id).subscribe((data:any)=>{
    })
  }

  load() {
    this.apiService.getTasks().subscribe((data:any)=>{
      this.tasks = data.items;
    })
  }
}
