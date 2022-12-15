import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { errorSelector, isLoadingSelector, tagsSelector } from '../../store/selectors';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.css']
})
export class PopularTagsComponent implements OnInit {
  isLoading$: Observable<boolean>;
  popularTags$: Observable<string[] | null>;
  error$: Observable<string | null>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.fetchData()
  }


  fetchData(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.popularTags$ = this.store.pipe(select(tagsSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

}
