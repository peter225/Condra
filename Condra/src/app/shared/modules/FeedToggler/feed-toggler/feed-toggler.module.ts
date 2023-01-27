import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedTogglerComponent } from '../Components/feed-toggler/feed-toggler.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [FeedTogglerComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule
  ],
  exports: [FeedTogglerComponent]
})
export class FeedTogglerModule { }
