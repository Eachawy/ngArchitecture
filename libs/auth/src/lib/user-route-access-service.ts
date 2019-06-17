import { Injectable, isDevMode } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { Principal } from '../';
import { StateStorageService } from './state-storage.service';
import { MessageService } from 'primeng/api';


@Injectable({ providedIn: 'root' })
export class UserRouteAccessService implements CanActivate {
    constructor(
        private router: Router,
        private principal: Principal,
        private messageService: MessageService,
        private stateStorageService: StateStorageService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
        const authorities = route.data['authorities'];
        
        // We need to call the checkLogin / and so the principal.identity() function, to ensure,
        // that the client has a principal too, if they already logged in by the server.
        // This could happen on a page refresh.
        return this.checkLogin(authorities, state.url);
    }

    checkLogin(authorities: string[], url: string): Promise<boolean> {
        const principal = this.principal;
        this.stateStorageService.storeUrl(url);
        return Promise.resolve(

            // principal.hasAnyAuthority(authorities,'Direct').then(response => {
            //     if (response) {
            //         return true;
            //     }
            //         this.messageService.add({
            //             severity: 'error',
            //             summary: 'Service Message',
            //             detail: 'No Access',
            //             closable: true,
            //             life: 3000000
            //           });
            //         if (isDevMode()) {
            //             console.error('User has not any of required authorities: ', authorities);
            //         }
            //     return false;
            // })

            principal.identity().then(account => {
                if (!authorities || authorities.length === 0) {
                    return false;
                }
                if (account) {
                    return principal.hasAnyAuthority(authorities,'Direct').then(response => {
                        console.log(response);
                        if (response) {
                            return true;
                        }
                            this.messageService.add({
                                severity: 'error',
                                summary: 'Service Message',
                                detail: 'No Access',
                                closable: true,
                                life: 3000000
                              });
                            if (isDevMode()) {
                                console.error('User has not any of required authorities: ', authorities);
                            }
                        return false;
                    });
                }

                if (!account) {
                    this.router.navigate(['login']);
                }

                return false;
            })
        );
    }
}
