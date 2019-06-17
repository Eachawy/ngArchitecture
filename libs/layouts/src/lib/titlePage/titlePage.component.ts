import { Component, OnInit } from '@angular/core';
import { Principal } from '@SVIS/auth';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { LanguageService } from '@SVIS/language-services';
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

  constructor(private principal: Principal, private translate: TranslateService, private langServices: LanguageService) {}

  ngOnInit() {
    this.titPageInit();
    this.onLangChange();
  }

  private titPageInit() {
   this.principal.componentTitle.subscribe( d => {
    this.lang1 =  this.langServices.langKay;
    this.lang1 === this.principal.defaultLang ? this.titlePage = d['lang1'] : this.titlePage = d['lang2'];
   });
  }

  private onLangChange() {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
        this.titPageInit();
    });
  }

}
