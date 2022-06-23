import { Injectable  } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';

export class HttpService<T> {

  constructor(protected readonly http: HttpClient ) { }

  protected GET(url: string, params = {}): Observable<T | T[]> {
    return this.http.get<T | T[]>(`${ environment.apiUrl }/${url}`, { params });
  }

  protected POST(url: string, body: T, params = {}): Observable<T | T[]> {
    return this.http.post<T | T[]>(`${ environment.apiUrl }/${url}`, body, { params });
  }

  protected PUT(url: string, body: Partial<T>, params = {} ): Observable<T | T[]> {
    return this.http.put<T | T[]>(`${ environment.apiUrl }/${url}`, body, { params });
  }

  protected DELETE(url: string, params = {}): Observable<T | T[] | void> {
    return this.http.delete<T | T[] | void>(`${ environment.apiUrl }/${url}`, { params });
  }
}
