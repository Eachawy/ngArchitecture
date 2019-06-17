import { Router, NavigationStart, NavigationError, RouterStateSnapshot, NavigationEnd, NavigationCancel } from '@angular/router';
import { Injectable } from '@angular/core';
import { Principal } from '../../../auth/src/lib/principal.service';
import { StateStorageService } from '../../../auth/src/lib/state-storage.service';
import { MessageService } from 'primeng/api';


@Injectable({ providedIn: "root"})

export class AccessRouteServices {

    URLRoute: any;
    constructor( private router: Router, private principal: Principal,private messageService: MessageService, private StorageSer: StateStorageService) {}

    routeEvent() {
        window.onpopstate = () => {this.checkRoute()}
    }


    checkRoute() {
           
        this.URLRoute = [window.location.hash.replace('#/','')];
        this.principal.hasAnyAuthority(this.URLRoute,'Direct').then(response => {

            if(response === false && this.URLRoute !== "login" && this.URLRoute !== "") {

                this.messageService.add({
                    severity: 'error',
                    summary: 'Service Message',
                    detail: 'No Access',
                    closable: false,
                    life: 3000
                  });

                if (this.StorageSer.getUrl() === null || this.StorageSer.getUrl() === '') this.StorageSer.storeUrl("");;
                window.location.hash = window.sessionStorage.getItem('SVIS-previousurl').replace(/['"]+/g, '');
                return false;
              
            }
        });
    }
}
