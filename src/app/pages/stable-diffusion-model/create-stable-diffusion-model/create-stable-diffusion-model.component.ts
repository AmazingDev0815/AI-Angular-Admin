import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../services/api/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-stable-diffusion-model',
  templateUrl: './create-stable-diffusion-model.component.html',
  styleUrls: ['./create-stable-diffusion-model.component.css']
})
export class CreateStableDiffusionModelComponent implements OnInit {

  validateForm!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, private apiService:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      modelName: [null, [Validators.required]],
      dockerImageTag: [null, [Validators.required]],
      imageResolution: [null, [Validators.required]],
      requiredVramInGigabytes: [null, [Validators.required]]
    });
  }
  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.apiService.createStableDiffusionModel(this.validateForm.value).subscribe((res : any) => {
        console.log(res);
        this.router.navigate(["stable-diffusion-models/list"]).then(r => {})
      })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
