import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api/api.service";
import {UntypedFormBuilder} from "@angular/forms";
import {UserContext} from "../../../services/user-context/user.context";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private apiService: ApiService,
              private fb: UntypedFormBuilder,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((queryParams) => {
      const sessionId = queryParams.get('sessionId');
      this.apiService.depositPayment(sessionId).subscribe((data: any) => {
        this.router.navigate(["tasks/create"]).then(r => {})
      });
    });
  }

}
