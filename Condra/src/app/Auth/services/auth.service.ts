import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthResponseInterface } from 'src/app/Auth/Types/authResponse.interface';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { RegisterRequestInterface } from 'src/app/Auth/Types/register-request.interface';
import { environment } from 'src/environments/environment';
import { LoginRequestInterface } from '../Types/login-request.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUser(response: AuthResponseInterface): CurrentUserInterface{
    return response.user
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface>{
    const url = environment.url + '/auth/register';
    return this.http.post<AuthResponseInterface>(url, data).pipe(map(
      this.getUser))
  }
  login(data: LoginRequestInterface): Observable<CurrentUserInterface>{
    const url = environment.url + '/auth/login';
    return this.http
                .post<AuthResponseInterface>(url, data)
                  .pipe(map(this.getUser))
  }
}
