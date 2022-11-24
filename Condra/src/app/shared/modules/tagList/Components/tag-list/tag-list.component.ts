import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {
  @Input('tagList') tagList?: string[]
  constructor() { }

  ngOnInit(): void {
  }

}
