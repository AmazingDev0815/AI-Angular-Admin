import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api/api.service";
import {FormArray, FormControl, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
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
  command: any;
  constructor(private apiService:ApiService, private router:Router, private fb: UntypedFormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      instanceName: ["u8s0b1enq6pz3o", [Validators.required]],
      stableDiffusionModelId: [null, [Validators.required]],
      prompts : new FormArray([]),
    });

    this.apiService.getPrompts().subscribe((data:any) => {
      this.prompts = data.items;
    });
    this.apiService.getStableDiffusionModels().subscribe((data:any) => {
      this.stableDiffusionModels = data.items;
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.apiService.createTask(this.validateForm.value).subscribe((res : any) => {
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

  patch() {
    const control = <FormArray>this.validateForm.get('prompts');
    this.prompts.forEach((x:any) => {
      control.push(this.patchValues(x.id))
    })
  }

  patchValues(label:any) {
    return this.fb.group({
      id: [label],
      numberOfImages: 10
    })
  }
}
