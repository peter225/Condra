import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isLoggedInSelector } from 'src/app/Auth/store/selectors';

@Component({
  selector: 'app-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  styleUrls: ['./feed-toggler.component.css']
})
export class FeedTogglerComponent implements OnInit {
  @Input('tagName') tagNameProps: string
  activeTab = 'Global feed';
  isLoggedIn$: Observable<boolean | null>
  //feedContainer = document.getElementById("feed-container");

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.initializeValues()
  }
  
  initializeValues() : void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  

}
