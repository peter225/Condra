import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './Components/feed/feed.component';
import { FeedService } from './services/feed.service';
import { EffectsModule } from '@ngrx/effects';
import { GetFeedEffect } from './store/effects/getFeed.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/feed.reducer';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatSidenavModule,
    MatSliderModule,
    RouterModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed',reducers)
  ],
  exports: [
    FeedComponent
  ],
  providers: [
    FeedService
  ]
})
export class FeedModule { }
