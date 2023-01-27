import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api/api.service";

@Component({
  selector: 'app-user-photo-list',
  templateUrl: './user-photo-list.component.html',
  styleUrls: ['./user-photo-list.component.css']
})
export class UserPhotoListComponent implements OnInit {

  public photos : any [] = [];

  constructor(private apiService:ApiService) {
  }

  ngOnInit(): void {
    this.apiService.getUserPhotos().subscribe( (data: any) => {
      this.photos = data.items;
    });
  }

  delete(id:string) {
    this.apiService.deleteUserPhoto(id).subscribe( (data: any) => {
      this.apiService.getUserPhotos().subscribe( (data: any) => {
        this.photos = data.items;
      });
    });
  }
}
