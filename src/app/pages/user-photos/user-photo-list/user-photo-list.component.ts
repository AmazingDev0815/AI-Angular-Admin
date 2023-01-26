import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api/api.service";

@Component({
  selector: 'app-user-photo-list',
  templateUrl: './user-photo-list.component.html',
  styleUrls: ['./user-photo-list.component.css']
})
export class UserPhotoListComponent implements OnInit {

  public items : any;

  constructor(private apiService:ApiService) {
    apiService.getUserPhotos().subscribe( (data: any) => {
      this.items = data.items;
    });
  }

  ngOnInit(): void {
  }

}
