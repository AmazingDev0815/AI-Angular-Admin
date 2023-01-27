import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../../services/api/api.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  constructor(private router:Router, private route: ActivatedRoute, private apiService:ApiService) { }
  images : any[]= []
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.apiService.getImageCollection(id).subscribe((data:any)=>{
      this.images = data
    })
  }

  increaseResolution(id:string) {
    this.apiService.increaseImageResolution(id).subscribe((data:any)=>{
      this.images = data
    })
  }
}
