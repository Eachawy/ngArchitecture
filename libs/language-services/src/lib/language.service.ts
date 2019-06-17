import { Injectable, RendererFactory2, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SessionStorageService } from 'ngx-webstorage';
@Injectable({ providedIn: 'root' })
export class LanguageService {
  dataPageTitle: string;
  private componentTitle = new BehaviorSubject<string>('');
  pageTitle = this.componentTitle.asObservable();
  renderer: Renderer2 = null;

  // language support
  public lang: string;
  public langKay: string;
  private langSubject = new BehaviorSubject<string>('');
  public lang$ = this.langSubject.asObservable();
  public langObject: any = {};
  //---------
  constructor(
    private translate: TranslateService,
    private router: ActivatedRoute,
    private titleService: Title,
    private rootRenderer: RendererFactory2,
    private $sessionStorage: SessionStorageService
  ) {

    // this.init();
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

  public changeLanguage(language: string, langObj? : any): void {
    langObj === undefined || langObj === null ? (this.langObject = this.$sessionStorage.retrieve('langObj')) : (this.langObject = langObj);
    this.langKay = language;
    // this.langObject = this.$sessionStorage.retrieve('langObj');
    this.lang = this.langObject[language].code;
    this.translate.use(this.lang);
    this.langSubject.next(language);
    this.translate.currentLang = this.lang;

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.translatetitle();
    });

    this.forceChangeLangSupApplications();
    this.updatePageDirection(this.langObject[language].dir);
    console.log(`has changed to ${this.lang}`);
  }

  // public init(DefLang? : string, langObj? : any): void {
  //   langObj === undefined || langObj === null ? (this.langObject = this.$sessionStorage.retrieve('langObj')) : (this.langObject = langObj);
  //   DefLang === undefined || DefLang === null ? (this.lang = this.lang) : (this.lang = this.langObject[DefLang].code);
  //   // translate.addLangs(['en', 'ar']);
  //   this.translate.setDefaultLang(this.lang);
  //   this.translate.use(this.lang);
  //   this.langSubject.next(this.lang);
  //   this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
  //     this.translatetitle();
  //   });
  // }

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

  private updatePageDirection(dir: string) {
    this.renderer = this.rootRenderer.createRenderer(
      document.querySelector('html'),
      null
    );
    this.renderer.setAttribute(document.querySelector('html'),'lang',this.translate.currentLang);
    this.renderer.setAttribute(document.querySelector('html'), 'dir', dir);

  }

  forceChangeLangSupApplications() {
    const langState = document.getElementById('content');
    if (langState) {
      for (
        let i = 0;
        i < langState.querySelectorAll('[lang-state]').length;
        i++
      ) {
        langState.querySelectorAll('[lang-state]')[i].setAttribute('lang-state', this.langKay);
      }
    }
  }
  
}
