import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateArticleComponent } from '../Components/create-article/create-article.component';
import { RouterModule } from '@angular/router';
import { ArticleFormModule } from 'src/app/shared/modules/articleForm/article-form/article-form.module';
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
    ArticleFormModule,
    RouterModule.forChild(routes)
  ]
})
export class CreateArticleModule { }
