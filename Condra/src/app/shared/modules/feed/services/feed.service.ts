import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersistenceService } from 'src/app/shared/services/persistence.service';
import { environment } from 'src/environments/environment';
import { GetFeedResponseInterface } from '../types/getFeedResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  private http: HttpClient
  constructor(private handler: HttpBackend, 
              private persistenceService: PersistenceService
            ) {
                this.http = new HttpClient(handler)
            }

  getFeed(url: string): Observable<GetFeedResponseInterface>{
    const completeUrl = environment.apiUrl + url;
    //let headers = new HttpHeaders()
    //const token = this.persistenceService.get('accessToken')

    //headers.append('Authorization', `Token ${token}`)
    //let options = new RequestOptions
        return this.http.get<GetFeedResponseInterface>(completeUrl);
  }
}
