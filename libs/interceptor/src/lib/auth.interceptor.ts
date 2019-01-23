import { Observable } from 'rxjs';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { SERVER_API_URL } from '@SVIS/common-services';

export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService
  ) {}

  intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {

    if (!request || !request.url || (/^http/.test(request.url) && !(SERVER_API_URL && request.url.startsWith(SERVER_API_URL))) ) {
      return next.handle(request);
    }

    const cookie = document.cookie;
    
    if (!!cookie) {
      request = request.clone({
        withCredentials: true,
        setHeaders: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
          'Cookie': cookie,
        }
      });
    } else {
      request = request.clone({
        withCredentials: true,
        setHeaders: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
    }

    return next.handle(request);
  }
}
