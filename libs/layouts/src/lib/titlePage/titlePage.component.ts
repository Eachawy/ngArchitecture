import { Component, OnInit } from '@angular/core';
import { Principal } from 'libs/auth/src/lib/principal.service';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
@Component({
  selector: 'titelpage',
  template: `
    <h1 class="titlePage">{{ titlePage }}</h1>
  `,
  styles: []
})
export class titlePageComponent implements OnInit {

  public titlePage: string;
  private lang1: string;

  constructor(private principal: Principal, private translate: TranslateService) {}

  ngOnInit() {
    this.titPageInit();
    this.onLangChange();
  }

  private titPageInit(lng1? : string) {
   this.principal.componentTitle.subscribe( d => {
    !lng1 ? this.lang1 = this.translate.currentLang : this.lang1 = lng1;
    this.lang1 === this.principal.defaultLang ? this.titlePage = d[0] : this.titlePage = d[1];
   });
  }

  private onLangChange() {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
        this.titPageInit(event.lang);
    });
  }

}
