import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendErrorMessagesComponent } from './Components/backend-error-messages/backend-error-messages.component';




@NgModule({
  declarations: [BackendErrorMessagesComponent],
  imports: [
    CommonModule
  ],
  exports: [BackendErrorMessagesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BackEndErrorMessagesModule { }
