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

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
  }
  handlePreview = async (file: NzUploadFile): Promise<void> => {
    // if (!file.url && !file.preview) {
    //   file.preview = await getBase64(file.originFileObj!);
    // }
    // this.previewImage = file.url || file.preview;
    // this.previewVisible = true;
  };

  onSubmitImage() {
    this.apiService.uploadUserPhotos(this.fileList).subscribe((data: any) => {
      this.router.navigate(['user-photos/list']).then(r => {});
    }, error => {
    })
  }
}
