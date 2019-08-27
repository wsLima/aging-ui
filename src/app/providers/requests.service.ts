import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse, HttpEventType } from '@angular/common/http';
import { Observable, Subscriber, PartialObserver, Observer } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(
    private readonly http: HttpClient,
    private _router: Router,
  ) { }

  private headers = new HttpHeaders({
    'accept': 'application/json',
  });

  private options = { headers: this.headers, reportProgress: true };

  public post(url: string, body: any): Observable<any> { // METODO POST

    let headers = new HttpHeaders({
      'Authorization': 'No Auth',
      'accept': 'application/json',
    });
    this.options = { headers: headers, reportProgress: true };
    return Observable.create((observer: Subscriber<any>) => {
      this.http.post(url, body, this.options).subscribe(this.forward(observer));
    });
  }

  public put(url: string, body: any): Observable<any> { // METODO PUT

    let headers = new HttpHeaders({
      'Authorization': 'No Auth',
      'accept': 'application/json',
    });
    this.options = { headers: headers, reportProgress: true };
    return Observable.create((observer: Subscriber<any>) => {
      this.http.put(url, body, this.options).subscribe(this.forward(observer));
    });
  }

  public get(url: string): Observable<any> { // METODO GET

    let headers = new HttpHeaders({
      'Authorization': 'No Auth',
      'accept': 'application/json',
    });
    this.options = { headers: headers, reportProgress: true };
    return Observable.create((observer: Subscriber<any>) => {
      this.http.get(url, this.options)
        .subscribe(this.forward(observer));
    });

  }

  public delete(url: string): Observable<any> {
    var headerDelete = new HttpHeaders({
      'Authorization': 'No Auth',
      'accept': 'application/json',
      'Content-Type': 'application/json'
    });
    var optionsDelete = {
      headers: headerDelete,
      reportProgress: true
    }
    return this.http.delete(url, optionsDelete);
  }

  public patch(url: string, body: any): Observable<any> { // METODO PATCH
    return this.http.patch(url, body, this.options);
  }

  public forward(observer: Subscriber<any>): PartialObserver<any> {
    let toReturn: Observer<any> = {
      next: (response) => {
        observer.next(response);
      },
      error: (error) => {
        if (error.status === 403) {
        }
        observer.error(error);
      },
      complete: () => { observer.complete() },
    };

    return toReturn;
  }
}
