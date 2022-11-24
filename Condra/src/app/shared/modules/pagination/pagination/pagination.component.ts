import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { merge, Observable, of, startWith, switchMap } from 'rxjs';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { GetFeedResponseInterface } from '../../feed/types/getFeedResponse.interface';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input('total') totalProps?: number 
  @Input('dataSource') dataSourceProps?: ArticleInterface[]
  @Input('url') urlProps: string
  @Input('limit') limitProps: number
  @Input('currentPage') currentPageProps: number
  @Input('data') data$: Observable<GetFeedResponseInterface | null>
  pagesCount: number
  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator

  constructor() { }

  ngOnInit(): void {
    this.linkArticleToPaginator()
    this.pagesCount = Math.ceil((this.totalProps as number)/this.limitProps)
    
  }
  linkArticleToPaginator(){
    merge(this.paginator.page).pipe(
      startWith({}),
      switchMap(()=>{
        return of(this.data$.subscribe(a=>a?.articles))
      })
    ).subscribe(res=>{
      const from = this.paginator.pageIndex * 10
      const to = from + 10;
      this.dataSourceProps = (res as unknown as GetFeedResponseInterface).articles.slice(from, to)
    })
  }

}
