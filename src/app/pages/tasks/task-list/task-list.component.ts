import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "../../../services/api/api.service";
import {UserContext} from "../../../services/user-context/user.context";
import {ActivatedRoute} from "@angular/router";

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
  constructor(private apiService:ApiService, private userContext:UserContext, private route: ActivatedRoute) {
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
    const user = this.route.snapshot.paramMap.get('user');
    if (user === "user"){
      apiService.getTasks(true).subscribe((data:any)=>{
        this.tasks = data.items;
      })
    }
    else {
      apiService.getTasks(false).subscribe((data:any)=>{
        this.tasks = data.items;
      })
    }
  }
}
