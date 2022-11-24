import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { TagListComponent } from '../Components/tag-list/tag-list.component';



@NgModule({
  declarations: [TagListComponent],
  imports: [
    CommonModule,
    MatChipsModule
  ],
  exports: [TagListComponent]
})
export class TagListModule { }
