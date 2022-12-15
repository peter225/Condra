import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularTagsService } from '../services/popular-tags.service';
import { PopularTagsComponent } from '../components/popular-tags/popular-tags.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [PopularTagsComponent],
  imports: [
    CommonModule,
    MatChipsModule,
    MatSidenavModule
  ],
  providers:[PopularTagsService],
  exports: [PopularTagsComponent]
})
export class PopularTagsModule { }
