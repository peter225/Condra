import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tag-feed',
  templateUrl: './tag-feed.component.html',
  styleUrls: ['./tag-feed.component.css']
})
export class TagFeedComponent implements OnInit {
  apiUrl: string
  tagName: string
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.tagName = (this.route.snapshot.paramMap.get('slug')) as string
    console.log(this.tagName)
    this.apiUrl = `/articles?tag=${this.tagName}`
    console.log(this.apiUrl)
  }

}
