import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from 'src/app/shared/services/article.service';
import { ArticleComponent } from '../Components/article/article.component';
import { RouterModule } from '@angular/router';
import { GetArticleEffect } from '../store/effects/getArticle.effect';
import { reducers } from '../store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    RouterModule,
    EffectsModule.forFeature([GetArticleEffect]),
    StoreModule.forFeature('article',reducers)
  ],
  providers:[ArticleService]
})
export class ArticleModule { }
