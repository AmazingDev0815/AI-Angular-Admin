import { Component, OnInit } from '@angular/core';
import {UserContext} from "../../../services/user-context/user.context";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(public userContext:UserContext) {
  }
  
  ngOnInit(): void {

  }

}
