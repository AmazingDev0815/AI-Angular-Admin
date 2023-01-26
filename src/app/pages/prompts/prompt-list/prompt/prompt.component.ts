import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent implements OnInit {
  @Input() prompt : any
  constructor() {

  }

  ngOnInit(): void {
  }

}
