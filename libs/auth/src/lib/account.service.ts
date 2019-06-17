import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_API_URL} from '../../../common-services/src/lib/app.constants';


@Injectable({ providedIn: 'root' })
export class AccountService {

  constructor(private http: HttpClient) {}

  get(): Observable<HttpResponse<Account>> {
    return this.http.post<Account>( SERVER_API_URL + 'secure/login', null, {
      observe: 'response',
    });
  }

  save(account: any): Observable<HttpResponse<any>> {
    return this.http.post( SERVER_API_URL + 'secure/login', account, {
      observe: 'response'
    });
  }


  checkOut(): Observable<HttpResponse<any>>{

    return this.http.post<any>( SERVER_API_URL + 'secure/logout', null, {
      observe: 'response'
    });

  }
}
