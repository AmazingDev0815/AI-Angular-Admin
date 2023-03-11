import { Component, OnInit } from '@angular/core';
import {NzUploadFile} from "ng-zorro-antd/upload";
import {Router} from "@angular/router";
import {ApiService} from "../../../services/api/api.service";

@Component({
  selector: 'app-upload-user-photo',
  templateUrl: './upload-user-photo.component.html',
  styleUrls: ['./upload-user-photo.component.css']
})
export class UploadUserPhotoComponent implements OnInit {

  fileList: NzUploadFile[] = [];
  previewImage: string | undefined = '';
  previewVisible = false;
  uploadUrl : string  = "";
  constructor(private router: Router, private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.apiService.getUploadToken().subscribe((data : any) => {
      this.uploadUrl = this.apiService.BASE_URL + "/files/user-photo?token="+ data.token;
      console.log(this.uploadUrl)
    })
  }
  handlePreview = async (file: NzUploadFile): Promise<void> => {
  };

  onSubmitImage() {
    let files = this.fileList.map(item => {
      console.log(item.response.id)
      return {
        FileId : item.response.id
      }
    } )

    let command = {
      keepOldPhotos : false,
      files : files
    }
    console.log(command);

    this.apiService.uploadUserPhotos(command).subscribe((data: any) => {
      this.router.navigate(['user-photos/list']).then(r => {});
    }, error => {
    })
  }
}
