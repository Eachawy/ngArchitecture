import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  Params,
  PRIMARY_OUTLET
} from '@angular/router';
import { filter } from 'rxjs/operators';
import { Component, OnInit, Input } from '@angular/core';
import { Principal } from '@SVIS/auth';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

import { LanguageService } from '@SVIS/language-services';
@Component({
  selector: 'breadCrumb',
  template: `
    <div id="breadcrumb">
      <div class="info">
        <a>
          <i class="icon home"></i>
        </a>
        <a>Vehicle details</a>
        <a class="active">Edit vehicle detail</a>
      </div>
      <!-- <div class="chassis-no">
        <i class="chassis icon"></i>
        <label for="">Chassis No.</label>
        <span>1112134413EACZQF3</span>
      </div> -->
    </div>
    <!-- <nav>
      <div class="nav-wrapper">
        <div class="col s12">
          <a routerLink="/welcome" class="breadcrumb">Home</a>
          <ng-container *ngFor="let breadcrumb of breadcrumbs">
            <span class="breadcrumb">{{ breadcrumb.label }}</span>
        <a href="{{homeLink}}"> <i class="icon home"></i> </a>
        <ng-container
          *ngFor="let item of List; let i = index"
          [class.active]="i === List.length - 1"
        >

              <a [routerLink]="[breadcrumb.url, breadcrumb.params]"  class="breadcrumb">{{ breadcrumb.label }}</a>
            <a href="{{item.path}}" *ngIf="i !== List.length - 1">{{
              lang === 'Lang1' ? item.lang1 : item.lang2
            }}</a>
            <a class="active" *ngIf="i === List.length - 1">{{ lang === 'Lang1' ? item.lang1 : item.lang2  }}</a>

          </ng-container>
        </ng-container>
      </div>
      <!--
        <div class="chassis-no">
          <i class="chassis icon"></i>
          <label for="">Chassis No.</label>
          <span>1112134413EACZQF3</span>
        </div>
      </div>
    </nav> -->
      -->
      
      </div>
      <p-toast></p-toast>
      <App-LoadingPage></App-LoadingPage>
  `,
  styles: []
})
export class breadCrumbComponent implements OnInit {
  // public breadcrumbs: IBreadcrumb[];
  @Input() List: any = [];
  homeLink: string;
  lang: string;

  // constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  //   this.breadcrumbs = [];
  //   //subscribe to the NavigationEnd event
  //   this.router.events
  //     .pipe(filter((event: Event) => event instanceof NavigationEnd))
  //     .subscribe(event => {
  //       //set breadcrumbs
  //       let root: ActivatedRoute = this.activatedRoute.root;
  //       this.breadcrumbs = this.getBreadcrumbs(root);
  //     });
  // }
  constructor(private principal: Principal, private translate: TranslateService, private langServices: LanguageService) {}

  ngOnInit() {}
  ngOnInit() {
    this.homeLink = this.principal.landingPage;
    this.init();
    this.onLangChange();
    console.log(this.List);
  }

  // private getBreadcrumbs(
  //   route: ActivatedRoute,
  //   url: string = '',
  //   breadcrumbs: IBreadcrumb[] = []
  // ): IBreadcrumb[] {
  //   const ROUTE_DATA_BREADCRUMB: string = 'breadcrumb';
   private onLangChange() {
     this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
          this.init();
     });
   }

  //   //get the child routes
  //   let children: ActivatedRoute[] = route.children;

  //   //return if there are no more children
  //   if (children.length === 0) {
  //     return breadcrumbs;
  //   }

  //   //iterate over each children
  //   for (let child of children) {
  //     //verify primary route
  //     if (child.outlet !== PRIMARY_OUTLET) {
  //       continue;
  //     }

  //     //verify the custom data property "breadcrumb" is specified on the route
  //     if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
  //       return this.getBreadcrumbs(child, url, breadcrumbs);
  //     }

  //     //get the route's URL segment
  //     let routeURL: string = child.snapshot.url
  //       .map(segment => segment.path)
  //       .join('/');

  //     //append route URL to URL
  //     url += `/${routeURL}`;

  //     //add breadcrumb
  //     let breadcrumb: IBreadcrumb = {
  //       label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
  //       //params: child.snapshot.params,
  //       url: url
  //     };

  //     breadcrumbs.push(breadcrumb);
  //     //recursive
  //     return this.getBreadcrumbs(child, url, breadcrumbs);
  //   }
  // }
   private init (): void {
    this.lang  = this.langServices.langKay;
   }


}

// interface IBreadcrumb {
//   label: string;
//   //params?: Params;
//   url: string;
// }
