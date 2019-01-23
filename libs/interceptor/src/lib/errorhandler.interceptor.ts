import { MessageService } from 'primeng/api';
import { HttpInterceptor, HttpRequest, HttpErrorResponse, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


export class ErrorHandlerInterceptor implements HttpInterceptor {
    constructor(private messageService: MessageService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap(
                (event: HttpEvent<any>) => {},
                (err: any) => {
                    if (err instanceof HttpErrorResponse) {
                        if (!(err.status === 401 && (err.message === '' || (err.url && err.url.includes('/api/account'))))) {
                            if (this.messageService !== undefined) {
                                
                                this.messageService.add({
                                    severity:'error', 
                                    summary:'Service Message', 
                                    detail:err.statusText,
                                    closable:false,
                                    life:3000000
                                  });
                            }
                        }
                    }
                }
            )
        );
    }
}
