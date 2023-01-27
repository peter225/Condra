import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalFeedComponent } from '../Components/global-feed/global-feed.component';
import { RouterModule } from '@angular/router';
import { FeedModule } from 'src/app/shared/modules/feed/feed.module';
import { PopularTagsModule } from 'src/app/shared/modules/popularTags/popular-tags/popular-tags.module';
import { FeedTogglerModule } from 'src/app/shared/modules/FeedToggler/feed-toggler/feed-toggler.module';

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
    PopularTagsModule,
    FeedTogglerModule,
    RouterModule.forChild(routes)
  ]
})
export class GlobalFeedModule { }
