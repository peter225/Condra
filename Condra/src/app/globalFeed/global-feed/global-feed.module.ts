import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalFeedComponent } from '../Components/global-feed/global-feed.component';
import { RouterModule } from '@angular/router';
import { FeedModule } from 'src/app/shared/modules/feed/feed.module';
import { PaginationModule } from 'src/app/shared/modules/pagination/pagination/pagination.module';

const routes = [
  {
    path:'',
    component: GlobalFeedComponent
  }
]


@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [
    CommonModule,
    FeedModule,
    PaginationModule,
    RouterModule.forChild(routes)
  ]
})
export class GlobalFeedModule { }
