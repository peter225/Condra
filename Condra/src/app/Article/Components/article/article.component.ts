import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getArticleAction } from '../../store/actions/getArticle.action';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  slug: string
  constructor(private store: Store,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }
  
  initializeValues()
  {
    this.slug = (this.route.snapshot.paramMap.get('slug')) as string
  }

  fetchData()
  {
    this.store.dispatch(getArticleAction({slug:this.slug}))
  }

}
