import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PopularTagsService {

  private http: HttpClient
  constructor(private handler: HttpBackend) {
                this.http = new HttpClient(handler)
  }

  getPopularTags(): Observable<string[]>{
    return this.http.get(environment.apiUrl+'/tags').pipe(map((response:any)=>{
      return response.tags
    }))
  }
}
