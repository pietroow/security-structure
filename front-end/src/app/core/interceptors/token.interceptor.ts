import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  private bypassUris = [
    '/oauth/token',
  ];

  constructor(private tokenService: TokenService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this._isBypassUrls(req.url)) {
      return next.handle(req);
    }
    const token = this.tokenService.getAccessToken();
    if (!this.tokenService.isAccessTokenInvalid()) {
      req = this._addToken(req, token);
      return next.handle(req);
    } else {
      return this.tokenService.refreshToken().pipe(
        switchMap(() => {
          req = this._addToken(req, this.tokenService.getAccessToken());
          return next.handle(req);
        })
      );
    }
  }

  private _isBypassUrls(url: string): boolean {
    return this.bypassUris.some((uri) => url.includes(uri));
  }

  private _addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

}
