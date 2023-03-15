import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "../../../services/api/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ImageCollectionListComponent implements OnInit, OnDestroy {

  collections: any[] = []
  interval : any
  BASE_URL : string = environment.BASE_URL
  constructor(private apiService: ApiService,  private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.load(this.apiService);
    this.interval = setInterval(() => this.load(this.apiService), 5000);
    this.route.paramMap.subscribe(params => {
      clearInterval(this.interval);
      this.load(this.apiService);
      this.interval = setInterval(() => this.load(this.apiService), 5000);
    });
  }

  ngOnDestroy(): void {
    if (this.interval){
      clearInterval(this.interval)
    }
  }
  load(apiService: ApiService) {
    const user = this.route.snapshot.paramMap.get('user');
    if (user === "user"){
      apiService.getImageCollections(true).subscribe((data:any) => {
        console.log(data);
        this.collections = data.items;
      })
    }
    else {
      apiService.getImageCollections(false).subscribe((data:any) => {
        console.log(data);
        this.collections = data.items;
      })
    }
  }
}
