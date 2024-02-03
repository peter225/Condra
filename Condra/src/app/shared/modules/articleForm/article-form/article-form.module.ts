import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleFormComponent } from '../Components/article-form/article-form.component';
import { BackEndErrorMessagesModule } from '../../BackendErrorMessages/back-end-error-messages.module';



@NgModule({
  declarations: [ArticleFormComponent],
  imports: [
    CommonModule,
    BackEndErrorMessagesModule
  ],
  exports: [ArticleFormComponent]
})
export class ArticleFormModule { }
