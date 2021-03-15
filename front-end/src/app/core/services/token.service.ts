import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, finalize, map, take } from 'rxjs/operators';
import { CLIENT_HEADER, PARAMS_REFRESH_TOKEN } from 'src/app/configs/http-header.const';
import { JwtPayload } from '../models/jwt-payload.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private isRefreshing = false;
  private refreshSubject = new BehaviorSubject<string>(null);

  constructor(
    private jwtHelper: JwtHelperService,
    private http: HttpClient,
    private authService: AuthService) { }

  saveToken(jwt: string): void {
    localStorage.setItem('access_token', jwt);
  }

  refreshToken(): Observable<string> {
    if (!this.isRefreshing) {
      this.refreshSubject.next(null);
      this.isRefreshing = true;
      const headers = CLIENT_HEADER;
      const params = PARAMS_REFRESH_TOKEN;

      return this.http
        .post<any>(this.authService.loginUrl, null, { headers, withCredentials: true, params })
        .pipe(
          map((response) => {
            const token = response.access_token;
            this.saveToken(token);
            this.refreshSubject.next(token);
            return token;
          }),
          finalize(() => {
            this.isRefreshing = false;
          })
        );
    } else {
      return this.refreshSubject.pipe(
        filter((token) => token !== null),
        take(1)
      );
    }

  }

  getAccessToken(): string {
    return localStorage.getItem('access_token');
  }

  getPayload(): JwtPayload {
    return this.getAccessToken() ? this.jwtHelper.decodeToken(this.getAccessToken()) : null;
  }

  clearAccessToken(): void {
    localStorage.removeItem('access_token');
  }

  isAccessTokenInvalid(): boolean {
    const token = this.getAccessToken();
    return !token || (!!token && this.jwtHelper.isTokenExpired(token));
  }

  isLoggedIn(): boolean {
    return !!this.getAccessToken();
  }

  hasAnyPermission(roles: string[]): boolean {
    return !roles || roles.some((role) => this._hasPermission(role));
  }

  private _hasPermission(permission: string): boolean {
    return !!this.getPayload() && !!this.getPayload().authorities && this.getPayload().authorities.includes(permission);
  }

}
