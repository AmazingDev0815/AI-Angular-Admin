import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api/api.service";
import {FormArray, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  prompts: any[] = []
  stableDiffusionModels:  any[] = []
  validateForm!: UntypedFormGroup;

  constructor(private apiService: ApiService,
              private router: Router,
              private fb: UntypedFormBuilder) {
  }

  ngOnInit(): void {

    this.validateForm = this.fb.group({
      instanceName: ["u8s0b1enq6pz3o", [Validators.required]],
      stableDiffusionModelId: ['', [Validators.required]],
      numberOfTrainingTextEncoderSteps: [0],
      numberOfTrainingUnetSteps: [0],
      prompts: this.fb.array([])
    });

    this.apiService.getUserPhotos().subscribe((data:any) =>{
      let userPhotos = data.items;
      this.validateForm.get('numberOfTrainingTextEncoderSteps')?.setValue(userPhotos.length*30);
      this.validateForm.get('numberOfTrainingUnetSteps')?.setValue(userPhotos.length*150);
    });

    this.apiService.getPrompts().subscribe((data:any) => {
      this.prompts = data.items;
      for (let prompt of this.prompts) {
        (this.validateForm.get('prompts') as FormArray).push(this.fb.group({
          promptId: [prompt.id, Validators.required],
          numberOfImages: [10, Validators.required],
          active: [true],
          value : [prompt.value],
          negativeValue : [prompt.negativeValue],
          seed: [prompt.seed],
          sampler: [prompt.sampler],
          numberOfInferenceSteps: [prompt.numberOfInferenceSteps],
          cfgScale: [prompt.cfgScale],
          denoisingStrength: [prompt.denoisingStrength]
        }))
      }
    });

    this.apiService.getStableDiffusionModels().subscribe((data:any) => {
      this.stableDiffusionModels = data.items;
      this.validateForm.get('stableDiffusionModelId')?.setValue(this.stableDiffusionModels[0].id);
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      let command = this.validateForm.value;
      command.prompts = command.prompts.filter((p:any) => p.active);
      this.apiService.createTask(command).subscribe((res : any) => {
        console.log(res);
        this.router.navigate(["tasks/list"]).then(r => {})
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
