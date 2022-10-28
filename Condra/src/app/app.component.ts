import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetUserAction } from './Auth/store/actions/getUser.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Condra';
  constructor(private store: Store){}

  ngOnInit(): void {
    this.store.dispatch(GetUserAction())
  }
}
