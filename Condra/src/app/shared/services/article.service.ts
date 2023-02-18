import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PersistenceService } from 'src/app/shared/services/persistence.service';
import { environment } from 'src/environments/environment';
import { ArticleInterface } from '../types/article.interface';
import { GetArticleResponseInterface } from '../types/getArticleResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private http: HttpClient
  constructor(private handler: HttpBackend, 
              private persistenceService: PersistenceService
            ) {
                this.http = new HttpClient(handler)
            }

  getArticle(slug: string): Observable<ArticleInterface>{

    const completeUrl = `${environment.apiUrl}/articles/${slug}`;
    
    return this.http.get<GetArticleResponseInterface>(completeUrl).pipe(
      map((response: GetArticleResponseInterface )=>{
        return response.article
      })
    )
  }


}
