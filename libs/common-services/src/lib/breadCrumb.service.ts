import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })

export class BreadCrumbService {

    public breadcrumbList: Array<any> = [];

    constructor( private router: Router) { }

    listenRouting(menu: any) {
      return new Observable<any>(observer => {
        let routerUrl: string, routerList: Array<any>, target: any, parent: string = '';
        this.router.events.subscribe((router: any) => {
          routerUrl = router.urlAfterRedirects;
          if (routerUrl && typeof routerUrl === 'string') {
            target = menu;
            this.breadcrumbList.length = 0;
            routerList = routerUrl.slice(1).split('/');
            routerList.forEach((routerPage, index) => {
              index > 0 ? parent += routerList[index - 1]+'/' : parent = '';
              target = menu.get('#/'+parent+routerPage); 
              if(target === undefined) return false;
              this.breadcrumbList.push({
                lang1: target.lang1,
                lang2: target.lang2,
                path: '#/'+parent+routerPage
              });
              observer.next(this.breadcrumbList);
            });
          }
        });
      });
    }
}