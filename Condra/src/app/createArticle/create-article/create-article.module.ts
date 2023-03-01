import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateArticleComponent } from '../Components/create-article/create-article.component';
import { RouterModule } from '@angular/router';
const routes = [
  {
    path: "articles/new",
    component:CreateArticleComponent
  }
]


@NgModule({
  declarations: [CreateArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CreateArticleModule { }
