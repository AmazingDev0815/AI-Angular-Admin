import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api/api.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any [] = []
  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getUsers().subscribe((data:any)=>{
      this.users = data.items;
    })
  }
}
