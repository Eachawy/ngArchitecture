import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { LoadingService } from "./loading.service";
import { Subscription } from "rxjs";
@Component({
  selector:'App-loadingComponent',
  template:`
  <div class="LoadingContainer loaddingComponent" *ngIf="loadingFlag">
    <div class="loadingView">
      <div class = "blob-1"></div>
      <div class = "blob-2"></div>
    </div>
  </div>
  `
})


export class LoadingCompComponent implements OnInit, OnDestroy{

  @Input() loadingFlag;

  loading: boolean = false;
  loadingSubscription: Subscription;

  constructor(private loadingSer: LoadingService){}

  ngOnInit(): void {
    this.loadingSubscription = this.loadingSer.loadingCompStatus.subscribe((value) => {
      this.loading = value;
    });
  }

  ngOnDestroy(): void{
    this.loadingSubscription.unsubscribe();
  }
}


