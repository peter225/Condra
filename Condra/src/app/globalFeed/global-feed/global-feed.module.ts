import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalFeedComponent } from '../Components/global-feed/global-feed.component';
import { RouterModule } from '@angular/router';

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
    RouterModule.forChild(routes)
  ]
})
export class GlobalFeedModule { }
