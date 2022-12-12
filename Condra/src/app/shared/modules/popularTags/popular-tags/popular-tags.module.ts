import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularTagsService } from '../services/popular-tags.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[PopularTagsService]
})
export class PopularTagsModule { }
