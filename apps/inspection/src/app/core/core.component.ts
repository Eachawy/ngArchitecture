import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'SVIS-core',
  templateUrl: './core.component.html'
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
