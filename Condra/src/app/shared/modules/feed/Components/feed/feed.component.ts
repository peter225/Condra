import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getFeedAction } from '../../store/actions/getFeed.action';
import {  errorSelector, feedSelector, isLoadingSelector } from '../../store/selectors';
import { FeedStateInterface } from '../../types/feedState.interface';
import { GetFeedResponseInterface } from '../../types/getFeedResponse.interface';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private store: Store) { }
  @Input('apiUrl') apiUrlProps: string
  isLoading$: Observable<boolean>
  feeds$: Observable<GetFeedResponseInterface | null>
  error$: Observable<string | null>

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.feeds$ = this.store.pipe(select(feedSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    
    
  }

  fetchData() : void {
    this.store.dispatch(getFeedAction({url: this.apiUrlProps}))
  }

  ngOnInit(): void {
    this.fetchData()
    this.initializeValues()
  }

}
