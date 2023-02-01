import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedTogglerComponent } from '../Components/feed-toggler/feed-toggler.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [FeedTogglerComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    MatTabsModule
  ],
  exports: [FeedTogglerComponent]
})
export class FeedTogglerModule { }
