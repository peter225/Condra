import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagFeedComponent } from '../Components/tag-feed/tag-feed.component';
import { FeedModule } from 'src/app/shared/modules/feed/feed.module';
import { PopularTagsModule } from 'src/app/shared/modules/popularTags/popular-tags/popular-tags.module';
import { FeedTogglerModule } from 'src/app/shared/modules/FeedToggler/feed-toggler/feed-toggler.module';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: 'tag/:slug',
    component: TagFeedComponent
  }
]

@NgModule({
  declarations: [TagFeedComponent],
  imports: [
    CommonModule,
    FeedModule,
    PopularTagsModule,
    FeedTogglerModule,
    RouterModule.forChild(routes)
  ]
})
export class TagFeedModule { }
