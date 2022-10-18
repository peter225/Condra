import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from 'src/app/shared/types/backendError.interface';

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.css']
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorProps: BackendErrorsInterface;

  errorMessages:string[];
  constructor() { }

  ngOnInit(): void {
    //console.log(this.backendErrorProps)
    this.errorMessages = Object.keys(this.backendErrorProps).map((name:string)=>{
      const messages = this.backendErrorProps[name].message;
      return `${name} ${messages}`;
    })
  }

}
