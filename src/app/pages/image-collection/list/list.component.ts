import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api/api.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ImageCollectionListComponent implements OnInit {

  collections: any[] = []

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getImageCollections().subscribe((data:any) => {
      console.log(data);
      this.collections = data.items;
    })
  }

}
