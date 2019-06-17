import { Component, OnInit } from '@angular/core';
import { Router, GuardsCheckStart, NavigationError, NavigationStart } from '@angular/router';
// import { Principal } from '@SVIS/auth';
import { LanguageService } from '@SVIS/language-services';
import { AccessRouteServices} from "@SVIS/common-services";
@Component({
  selector: 'SVIS',
  template: `
  <router-outlet></router-outlet>
  `
})
export class rootComponent implements OnInit {
  constructor(
    private router: Router,
    // private authService: Principal,
    private langServ: LanguageService,
    private ARS: AccessRouteServices
  ) {}

  ngOnInit() {
    this.router.navigate(['/login']);
    this.router.errorHandler = (error: any) => {};

    this.ARS.routeEvent();


    // this.router.events.subscribe(val => {
    //   if (val instanceof GuardsCheckStart) {
    //     const state = val.state.root.children[0].routeConfig.path;
    //     if (state === '**' || state === '') {
    //       if (!this.authService.isAuthenticated()) {
    //         this.router.navigate(['login']);
    //       }
    //     }
    //     if (state === 'welcome') {
    //       if (!this.authService.isAuthenticated()) {
    //         this.router.navigate(['login']);
    //       }
    //     }
    //   }
    // });
  }
}

