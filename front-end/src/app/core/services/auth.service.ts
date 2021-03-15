import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CLIENT_HEADER } from 'src/app/configs/http-header.const';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUrl = `${environment.url}/oauth/token`;
  private logoutUrl = `${environment.url}/tokens/revoke`;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const body = `username=${username}&password=${password}&grant_type=password`;
    return this.http.post(this.loginUrl, body, { headers: CLIENT_HEADER, withCredentials: true });
  }

  logout(): any {
    return this.http.delete(this.logoutUrl, { headers: CLIENT_HEADER, withCredentials: true });
  }

}
