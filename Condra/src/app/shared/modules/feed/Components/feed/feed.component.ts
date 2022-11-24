import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { getFeedAction } from '../../store/actions/getFeed.action';
import {  errorSelector, feedSelector, isLoadingSelector } from '../../store/selectors';
import { FeedStateInterface } from '../../types/feedState.interface';
import { GetFeedResponseInterface } from '../../types/getFeedResponse.interface';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit,OnDestroy {

  constructor(private store: Store, private router: Router, private route: ActivatedRoute) { }
  @Input('apiUrl') apiUrlProps: string
  isLoading$: Observable<boolean>
  feeds$: Observable<GetFeedResponseInterface | null>
  error$: Observable<string | null>
  limit = environment.limit
  baseUrl: string
  queryParamSubscription: Subscription
  currentPage: number
  

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.feeds$ = this.store.pipe(select(feedSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.baseUrl = this.router.url.split('?')[0]
  }

  initializeListeners() :void{
    this.queryParamSubscription = this.route.queryParams.subscribe(
      (params: Params)=>{
        console.log(params)
        this.currentPage = Number(params['page'] || '1')
        console.log(this.currentPage)
        
    })
  }

  fetchData() : void {
    this.store.dispatch(getFeedAction({url: this.apiUrlProps}))
  }

  ngOnInit(): void {
    this.fetchData()
    this.initializeValues()
    this.initializeListeners()
  }
  ngOnDestroy():void {
    this.queryParamSubscription.unsubscribe()
  }

}
