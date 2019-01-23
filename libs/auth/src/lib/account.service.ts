import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_API_URL} from '@SVIS/common-services';


@Injectable({ providedIn: 'root' })
export class AccountService {

  constructor(private http: HttpClient) {}

  get(): Observable<HttpResponse<Account>> {

    return this.http.get<Account>( SERVER_API_URL + 'SVISRestAPIs/CheckRequest/secure/getResponse', {
      observe: 'response',
    });
  }

  save(account: any): Observable<HttpResponse<any>> {
    return this.http.post( SERVER_API_URL + 'api/account', account, {
      observe: 'response'
    });
  }
}
