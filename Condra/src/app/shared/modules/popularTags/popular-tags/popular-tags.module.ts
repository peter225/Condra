import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularTagsService } from '../services/popular-tags.service';
import { PopularTagsComponent } from '../components/popular-tags/popular-tags.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatSidenavModule } from '@angular/material/sidenav';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { GetPopularTagsEffect } from '../store/effects/getPopularTagEffect';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PopularTagsComponent],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('popularTags',reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    MatChipsModule,
    MatProgressSpinnerModule,
    MatSidenavModule
  ],
  providers:[PopularTagsService],
  exports: [PopularTagsComponent]
})
export class PopularTagsModule { }
