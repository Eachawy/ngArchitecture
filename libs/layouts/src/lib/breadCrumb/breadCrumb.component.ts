import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  Params,
  PRIMARY_OUTLET
} from '@angular/router';
import { filter } from 'rxjs/operators';

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

              <a [routerLink]="[breadcrumb.url, breadcrumb.params]"  class="breadcrumb">{{ breadcrumb.label }}</a>

          </ng-container>
        </div>
      </div>
    </nav> -->
  `,
  styles: []
})
export class breadCrumbComponent implements OnInit {
  // public breadcrumbs: IBreadcrumb[];

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

  ngOnInit() {}

  // private getBreadcrumbs(
  //   route: ActivatedRoute,
  //   url: string = '',
  //   breadcrumbs: IBreadcrumb[] = []
  // ): IBreadcrumb[] {
  //   const ROUTE_DATA_BREADCRUMB: string = 'breadcrumb';

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
}

// interface IBreadcrumb {
//   label: string;
//   //params?: Params;
//   url: string;
// }
