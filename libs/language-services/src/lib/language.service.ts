import { Injectable, RendererFactory2, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  dataPageTitle: string;
  private componentTitle = new BehaviorSubject<string>('');
  pageTitle = this.componentTitle.asObservable();
  renderer: Renderer2 = null;

  // language support
  lang: string;
  private langSubject = new BehaviorSubject<string>('');
  lang$ = this.langSubject.asObservable();
  //---------
  constructor(
    private translate: TranslateService,
    private router: ActivatedRoute,
    private titleService: Title,
    private rootRenderer: RendererFactory2
  ) {
    this.lang = 'en';
    // translate.addLangs(['en', 'ar']);
    translate.setDefaultLang(this.lang);
    translate.use(this.lang);
    this.langSubject.next(this.lang);
    this.init();
  }

  translatetitle(): void {
    this.router.url.subscribe(u => {
      this.dataPageTitle = this.getPageTitle(this.router.snapshot);
    });
    this.translate.get(this.dataPageTitle).subscribe((res: string) => {
      this.titleService.setTitle(res);
      this.componentTitle.next(res);
    });
  }

  changeLanguage(language: string): void {
    this.translate.use(language);
    this.langSubject.next(language);
    this.translate.currentLang = language;
    this.forceChangeLangSupApplications();
    console.log(`has changed to ${language}`);
  }

  private init() {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.translatetitle();
      this.updatePageDirection();
    });
  }

  private getPageTitle(routeSnapshot: ActivatedRouteSnapshot) {
    let title: string =
      routeSnapshot.data && routeSnapshot.data['pageTitle']
        ? routeSnapshot.data['pageTitle']
        : 'SCIS';
    if (routeSnapshot.firstChild) {
      title = this.getPageTitle(routeSnapshot.firstChild) || title;
    }
    return title;
  }

  private updatePageDirection() {
    this.renderer = this.rootRenderer.createRenderer(
      document.querySelector('html'),
      null
    );
    this.renderer.setAttribute(
      document.querySelector('html'),
      'lang',
      this.translate.currentLang
    );
    this.translate.currentLang === 'ar'
      ? this.renderer.setAttribute(document.querySelector('html'), 'dir', 'rtl')
      : this.renderer.setAttribute(
          document.querySelector('html'),
          'dir',
          'ltr'
        );
  }

  forceChangeLangSupApplications() {
    const langState = document.getElementById('content');
    if (langState) {
      for (
        let i = 0;
        i < langState.querySelectorAll('[lang-state]').length;
        i++
      ) {
        langState
          .querySelectorAll('[lang-state]')
          [i].setAttribute('lang-state', this.translate.currentLang);
      }
    }
  }
}
