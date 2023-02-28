import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../services/api/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NzUploadFile} from "ng-zorro-antd/upload";

@Component({
  selector: 'app-create-prompt',
  templateUrl: './create-prompt.component.html',
  styleUrls: ['./create-prompt.component.css']
})
export class CreatePromptComponent implements OnInit {
  validateForm!: UntypedFormGroup;
  tags : string[] = [];
  selectedTags: string[] = [];
  exampleImageFiles: NzUploadFile[] = [];
  initImageFiles: NzUploadFile[] = [];

  constructor(private fb: UntypedFormBuilder,
              private apiService: ApiService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id){
      this.apiService.getPrompt(id).subscribe(
        (data:any)=>{
          console.log(data);
          this.constructForm(data);
          this.apiService.getTags().subscribe((data:any)=>{
            console.log(data);
            this.tags = data.items.map((x:any) => x.name);
          });
        })
    }
    else {
      this.constructForm(null);
      this.apiService.getTags().subscribe((data:any)=>{
        console.log(data);
        this.tags = data.items.map((x:any) => x.name);
      });
    }
  }

  constructForm(prompt: any): void {
    this.validateForm = this.fb.group({
      id: [prompt?.id],
      value: [prompt?.value, [Validators.required]],
      active: [prompt?.active ?? true],
      negativeValue: [prompt?.negativeValue, [Validators.required]],
      cfgScale: [prompt?.cfgScale??7.5, [Validators.required]],
      numberOfInferenceSteps: [prompt?.numberOfInferenceSteps??30, [Validators.required]],
      exampleImageFile: [null],
      denoisingStrength: [prompt?.DenoisingStrength??0.75],
      numberOfImages: [prompt?.numberOfImages?? 10, [Validators.required]],
      seed: [prompt?.seed?? -1, [Validators.required]],
      tags: [prompt?.tags?? []],
     })
  }

  isNotSelected(value: string): boolean {
    return this.selectedTags.indexOf(value) === -1;
  }
  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.validateForm.value.exampleImageFile = this.exampleImageFiles.at(0)?.originFileObj;
      this.validateForm.value.initImageFile = this.initImageFiles.at(0)?.originFileObj;
      this.apiService.createPrompt(this.validateForm.value).subscribe((data:any)=>{
        this.router.navigate(["prompts/list"]).then(r => {})
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

  addItem(input: HTMLInputElement): void {
    const value = input.value;
    if (this.tags.indexOf(value) === -1 && value) {
      this.tags = [...this.tags, input.value || ``];
      input.value = "";
    }
  }
}
