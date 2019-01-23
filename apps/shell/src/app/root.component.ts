import { Component, OnInit } from '@angular/core';
import { Router, GuardsCheckStart } from '@angular/router';
import { Principal } from '@SVIS/auth';
import { LanguageService } from 'libs/language-services/src/lib/language.service';
@Component({
  selector: 'SVIS',
  template: `
  <router-outlet></router-outlet>
  `
})
export class rootComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: Principal,
    private langServ: LanguageService
  ) {}

  ngOnInit() {
    this.router.navigate(['/login']);
    // this.router.errorHandler = (error: any) => {};
    this.router.events.subscribe(val => {
      if (val instanceof GuardsCheckStart) {
        const state = val.state.root.children[0].routeConfig.path;
        if (state === '**' || state === '') {
          if (!this.authService.isAuthenticated()) {
            this.router.navigate(['login']);
          }
        }
        if (state === 'welcome') {
          if (!this.authService.isAuthenticated()) {
            this.router.navigate(['login']);
          }
        }
      }
    });
  }
}

