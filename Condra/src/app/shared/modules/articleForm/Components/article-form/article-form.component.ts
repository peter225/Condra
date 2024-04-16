import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendError.interface';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {
  @Input('initialValues') initialValueProps: ArticleInputInterface
  @Input('isSubmitting') isSubmittingProps: boolean
  @Input('errors') errorsProps: BackendErrorsInterface | null

  @Output('articleSubmit') articleSubmitEvent = new EventEmitter<
  ArticleInputInterface>()

  form: UntypedFormGroup
  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.form = this.fb.group({
      title:this.initialValueProps.title,
      body:this.initialValueProps.body,
      description:this.initialValueProps.description,
      tagList:this.initialValueProps.tagList.join(' ')
    })
  }

  onSubmit(): void{
    this.articleSubmitEvent.emit(this.form.value)
  }

}
