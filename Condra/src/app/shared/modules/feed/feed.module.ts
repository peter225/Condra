import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './Components/feed/feed.component';
import { FeedService } from './services/feed.service';



@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FeedComponent
  ],
  providers: [
    FeedService
  ]
})
export class FeedModule { }
