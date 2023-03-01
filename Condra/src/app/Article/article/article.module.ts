import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from 'src/app/shared/services/article.service';
import { ArticleComponent } from '../Components/article/article.component';
import { RouterModule } from '@angular/router';
import { GetArticleEffect } from '../store/effects/getArticle.effect';
import { reducers } from '../store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TagListModule } from 'src/app/shared/modules/tagList/tag-list/tag-list.module';

const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent
  }
]

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetArticleEffect]),
    StoreModule.forFeature('article',reducers),
    MatProgressSpinnerModule,
    TagListModule
  ],
  providers:[ArticleService]
})
export class ArticleModule { }
