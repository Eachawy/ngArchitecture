import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'SVIS-core',
  template: `
      <div id="inspection" *ngIf="!environmentState">
        <router-outlet></router-outlet>
      </div>

      <div *ngIf="environmentState">
        <master>
            <router-outlet></router-outlet>
        </master>
      </div>
  `
})
export class CoreComponent implements OnInit {

  environmentState: boolean;
  constructor() {
    this.environmentState = false;
  }

  ngOnInit() {
        // Standalone mode
        if (environment.standalone) {
          this.environmentState = environment.standalone;
        }
  }
}
