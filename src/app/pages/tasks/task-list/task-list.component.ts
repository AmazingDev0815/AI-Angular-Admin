import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "../../../services/api/api.service";
import {UserContext} from "../../../services/user-context/user.context";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnDestroy {
  tasks: any[] = []
  interval: any
  numberOfAvailableInstances: number = 0;
  credit: number = 0;
  constructor(private apiService:ApiService, private userContext:UserContext) {
  }

  ngOnInit(): void {
    this.load(this.apiService);
    this.interval = setInterval(() => this.load(this.apiService), 5000)

    this.apiService.getUserInfo().subscribe((data:any) => {
      this.credit = data.credit;
    });
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
