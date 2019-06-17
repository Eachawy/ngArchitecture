import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
@Component({
  template: ``
})
export class EmptyComponent implements OnInit, OnChanges {

  constructor(private router: Router) {}

  ngOnInit() {
    const url = this.router.routerState.snapshot.url;
    if (environment.standalone && url === '/welcome') {
      this.router.navigate(['/inspection']);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('appointment received state', changes); 
  }
}
