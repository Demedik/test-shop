import { Injectable  } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';

export class ThirdPartyHttpService<T> {

  constructor(protected readonly http: HttpClient, private thirdPartyBaseUrl: string) { }

  protected GET(url: string, params?: HttpParams): Observable<T | T[]> {
    return this.http.get<T | T[]>(`${ this.thirdPartyBaseUrl }/${url}`, { params });
  }

  protected POST(url: string, body: T, params?: HttpParams): Observable<T | T[]> {
    return this.http.post<T | T[]>(`${ this.thirdPartyBaseUrl }/${url}`, body, { params });
  }

  protected PUT(url: string, body: Partial<T>, params?: HttpParams): Observable<T | T[]> {
    return this.http.put<T | T[]>(`${ this.thirdPartyBaseUrl }/${url}`, body, { params });
  }

  protected DELETE(url: string, params?: HttpParams): Observable<T | T[] | void> {
    return this.http.delete<T | T[] | void>(`${ this.thirdPartyBaseUrl }/${url}`, { params });
  }
}
