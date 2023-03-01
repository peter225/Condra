import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { combineLatest, map, Observable, Subscription } from 'rxjs';
import { currentUserSelector } from 'src/app/Auth/store/selectors';
import { isLoadingSelector } from 'src/app/shared/modules/feed/store/selectors';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { getArticleAction } from '../../store/actions/getArticle.action';
import { articleSelector, errorSelector } from '../../store/selectors';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit ,OnDestroy {
  slug: string

  article: ArticleInterface

  articleSubscription: Subscription
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  isAuthor$: Observable<boolean>

  constructor(private store: Store,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
    this.fetchData()
  }
  
  initializeValues(): void {
    this.slug = (this.route.snapshot.paramMap.get('slug')) as string
    this.isLoading$ = this.store.select(isLoadingSelector)
    this.error$ = this.store.select(errorSelector)
    this.isAuthor$ = combineLatest([
      this.store.select(articleSelector),
      this.store.select(currentUserSelector)
    ]).pipe(map(([article, currentUser]:[ArticleInterface | null, CurrentUserInterface | null])=>{
      if(!article || !currentUser){
        return false
      }
      else{
        return currentUser.username === article.author.username
      }
    }))
  }

  initializeListeners(): void {
    this.articleSubscription = this.store.pipe(select(articleSelector
    )).subscribe((article: ArticleInterface | null)=>{
      this.article = article as ArticleInterface
    })
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({slug:this.slug}))
  }
  
  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe()
  }
}
