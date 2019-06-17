import { Component, OnInit, Input } from '@angular/core';
import { Principal } from '@SVIS/auth';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

import { LanguageService } from '@SVIS/language-services';
@Component({
  selector: 'breadCrumb',
  template: `
    <div id="breadcrumb">
      <div class="info">
        <a href="{{homeLink}}"> <i class="icon home"></i> </a>
        <ng-container
          *ngFor="let item of List; let i = index"
          [class.active]="i === List.length - 1"
        >

            <a href="{{item.path}}" *ngIf="i !== List.length - 1">{{
              lang === 'Lang1' ? item.lang1 : item.lang2
            }}</a>
            <a class="active" *ngIf="i === List.length - 1">{{ lang === 'Lang1' ? item.lang1 : item.lang2  }}</a>

        </ng-container>
      </div>
      <!--
        <div class="chassis-no">
          <i class="chassis icon"></i>
          <label for="">Chassis No.</label>
          <span>1112134413EACZQF3</span>
        </div>
      -->
      
      </div>
      <p-toast></p-toast>
      <App-LoadingPage></App-LoadingPage>
  `,
  styles: []
})
export class breadCrumbComponent implements OnInit {
  @Input() List: any = [];
  homeLink: string;
  lang: string;

  constructor(private principal: Principal, private translate: TranslateService, private langServices: LanguageService) {}

  ngOnInit() {
    this.homeLink = this.principal.landingPage;
    this.init();
    this.onLangChange();
    console.log(this.List);
  }

   private onLangChange() {
     this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
          this.init();
     });
   }

   private init (): void {
    this.lang  = this.langServices.langKay;
   }
}
