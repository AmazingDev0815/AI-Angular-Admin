import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {UserContext} from "../../../services/user-context/user.context";
import {Router} from "@angular/router";
import {ApiService} from "../../../services/api/api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  validateForm!: UntypedFormGroup;
  constructor(private apiService: ApiService,
              private fb: UntypedFormBuilder,
              public userContext: UserContext,
              private router: Router) {
    this.isAuthenticated = this.userContext.IsAuthenticated();
  }
  @Input() isAuthenticated: boolean = false;

  ngOnInit(): void {
      this.validateForm = this.fb.group({
        upn: [null, [Validators.required]],
        password: [null, [Validators.required]]
      });
  }

  logout(){
    this.userContext.clearAccessToken();
    this.isAuthenticated = false;
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      let formValue = this.validateForm.value;
      this.apiService.getAccessToken(formValue.upn, formValue.password).subscribe((data: any)=> {
        this.userContext.setAccessToken(data.accessToken);
        this.router.navigate(["users/login"]).then(r => {})
        this.isAuthenticated = true;
      }, error => {
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
