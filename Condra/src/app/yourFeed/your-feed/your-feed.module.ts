import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourFeedComponent } from '../Components/your-feed/your-feed.component';
import { RouterModule } from '@angular/router';
import { PopularTagsModule } from 'src/app/shared/modules/popularTags/popular-tags/popular-tags.module';
import { FeedModule } from 'src/app/shared/modules/feed/feed.module';
import { FeedTogglerModule } from 'src/app/shared/modules/FeedToggler/feed-toggler/feed-toggler.module';

const routes = [
  {
    path: 'feed',
    component: YourFeedComponent
  }
]

@NgModule({
  declarations: [YourFeedComponent],
  imports: [
    CommonModule,
    FeedModule,
    PopularTagsModule,
    FeedTogglerModule,
    RouterModule.forChild(routes)
  ]
})
export class YourFeedModule { }
