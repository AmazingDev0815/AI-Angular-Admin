import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api/api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ImageCollectionListComponent implements OnInit {

  collections: any[] = []
  constructor(private apiService: ApiService,  private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const user = this.route.snapshot.paramMap.get('user');
    if (user === "user"){
      this.apiService.getImageCollections(true).subscribe((data:any) => {
        console.log(data);
        this.collections = data.items;
      })
    }
    else {
      this.apiService.getImageCollections(false).subscribe((data:any) => {
        console.log(data);
        this.collections = data.items;
      })
    }
  }
}
