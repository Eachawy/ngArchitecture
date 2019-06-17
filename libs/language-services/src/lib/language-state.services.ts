import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Injectable, OnDestroy } from '@angular/core';
import { LanguageService } from './language.service';
import { Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LanguageStateService implements OnDestroy{


  lang;
  languageChangeSubscription: Subscription;

  constructor(private translate: TranslateService, private langService: LanguageService) {
    this.onLangChange();
  }

  isLang1(): boolean {
    return this.lang && this.lang === 'Lang1';
  }

  private onLangChange() {
    this.lang = this.langService.langKay;
    this.languageChangeSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.lang = this.langService.langKay;
    });
  }

  ngOnDestroy(): void {
    this.languageChangeSubscription.unsubscribe();
  }
}
