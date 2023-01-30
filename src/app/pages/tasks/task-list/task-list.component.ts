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
  numberOfAvailableInstances: any = 0;
  constructor(private apiService:ApiService) {
  }

  ngOnInit(): void {
    this.load(this.apiService);
    this.interval = setInterval(() => this.load(this.apiService), 5000)
  }

  ngOnDestroy(): void {
    clearInterval(this.interval)
  }

  stop(id:string) {
    this.apiService.stopTask(id).subscribe((data:any)=>{
    })
  }

  load(apiService: ApiService) {
    apiService.getTasks().subscribe((data:any)=>{
      this.tasks = data.items;
    })
    apiService.getNumberOfAvailableInstances().subscribe((data:any)=>{
      this.numberOfAvailableInstances = data
    })
  }
}
