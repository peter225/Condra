import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  
  @Input('total') totalProps: number
  @Input('url') urlProps: string
  @Input('limit') limitProps: number
  @Input('currentPage') currentPageProps: number

  constructor() { }

  ngOnInit(): void {
  }

}
