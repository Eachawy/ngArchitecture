import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { fadeAnimation } from '@SVIS/common-services';

import { Principal } from '@SVIS/auth';
import { BreadCrumbService } from '@SVIS/common-services';
@Component({
  selector: 'SVIS-core',
  template: `

      <div id="inspection" *ngIf="!environmentState">
        <breadCrumb [List]="breadcrumbList"></breadCrumb>
        <router-outlet></router-outlet>
      </div>

      <div *ngIf="environmentState">
        <master>
            <breadCrumb [List]="breadcrumbList"></breadCrumb>
            <main [@fadeAnimation]="ins.isActivated ? ins.activatedRoute : '' ">
              <router-outlet #ins="outlet"></router-outlet>
            </main>
        </master>
      </div>
  `,
  animations: [fadeAnimation]
})
export class CoreComponent implements OnInit {

  public breadcrumbList: any;
  public environmentState: boolean;

  constructor(
    private principal: Principal,
    private breadCrumbService: BreadCrumbService
    ) {
    this.environmentState = false;
  }

  ngOnInit() {
    // Standalone mode
    if (environment.standalone) {
      this.environmentState = environment.standalone;
    }
    this.breadCrumbService.listenRouting(this.principal.getUserContextURL()).subscribe( res => {
      this.breadcrumbList = res;
    });

  }

}

