import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getFeedAction } from '../../store/actions/getFeed.action';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private store: Store) { }
  @Input('apiUrl') apiUrlProps: string
  ngOnInit(): void {
    this.store.dispatch(getFeedAction({url: this.apiUrlProps}))
  }

}
