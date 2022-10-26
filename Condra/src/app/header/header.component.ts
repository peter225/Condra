import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { currentUserSelector, isAnonymousSelector, isLoggedInSelector, isSubmittingSelector } from '../Auth/store/selectors';
import { CurrentUserInterface } from '../shared/types/current-user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>
  isAnonymous$: Observable<boolean>
  currentUser$: Observable<CurrentUserInterface | null>


  constructor(private store: Store) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))as unknown as Observable<boolean> 
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector))as unknown as Observable<boolean>
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
  }

}
