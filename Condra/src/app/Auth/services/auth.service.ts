import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthResponseInterface } from 'src/app/shared/types/authResponse.interface';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { RegisterRequestInterface } from 'src/app/shared/types/register-request.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(data: RegisterRequestInterface): Observable<AuthResponseInterface>{
    const url = environment.url + '/auth/register';
    return this.http.post<AuthResponseInterface>(url, data).pipe(map(
      (response: AuthResponseInterface)=> response))
  }
}
