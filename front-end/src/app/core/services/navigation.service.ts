import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Params,
  Router,
} from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private previousUrl: string;
  private currentUrl = new BehaviorSubject<string>(undefined);
  private showSpinnerSubject = new Subject<boolean>();

  readonly showSpinner = this.showSpinnerSubject.asObservable();
  readonly currentUrlObservable = this.currentUrl.asObservable();

  private lastUrl: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    titleService: Title
  ) {
    this.router.events.subscribe((event) => {
      this._handleUrlLoading(event);
      if (event instanceof NavigationEnd) {
        this._handleUrls(event);
      }
    });
  }

  private _handleUrls(event: NavigationEnd): void {
    this.previousUrl = this.currentUrl.value;
    this.currentUrl.next(event.urlAfterRedirects);
  }

  setLastUrl(lastUrl: string): void {
    if (lastUrl !== '#/login') {
      this.lastUrl = lastUrl.slice(2);
    }
  }

  getLastUrl(): string {
    return this.lastUrl;
  }

  private _handleUrlLoading(event: any): void {
    if (event instanceof NavigationStart && this.isNewUrl()) {
      this.showSpinnerSubject.next(true);
    } else if (event instanceof NavigationEnd) {
      this.showSpinnerSubject.next(false);
    }
  }

  private isNewUrl(): boolean {
    return this.previousUrl !== this.currentUrl.value;
  }

  getPreviousUrl(): string {
    return this.previousUrl;
  }

  navigateToPreviousUrl(): void {
    this.router.navigateByUrl(this.previousUrl);
  }

  setQueryParams(queryParams: Params): void {
    this.router.navigate([], { relativeTo: this.activatedRoute, queryParams });
  }

  pushQueryParamsIfNotExist(queryParams: Params): void {
    const oldParams = this.getQueryParams();
    const newParams = { ...oldParams, ...queryParams };
    this.setQueryParams(newParams);
  }

  getQueryParamsObservable(): Observable<Params> {
    return this.activatedRoute.queryParams;
  }

  getQueryParams(): Params {
    return this.activatedRoute.snapshot.queryParams;
  }

  navigateTo(urls: string[]): void {
    this.router.navigate(urls);
  }
}
