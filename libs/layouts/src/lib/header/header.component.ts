import { Component, OnInit, HostListener, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService, LanguageStateService } from '@SVIS/language-services';
import { AuthServerProvider, Principal } from '@SVIS/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  languages: any[];
  themes: any[];
  navObj: any[];
  userProfile:any;
  date: Date;
  time: any;
  // Fixed Navbar
  isScroll = false;

  constructor(
    private languageService: LanguageService,
    private renderer: Renderer2,
    private router: Router,
    private authServerProvider: AuthServerProvider,
    private principal: Principal,
    public languageStateService: LanguageStateService
  ) {
    this.router.events.subscribe(val => {
      this.languageService.translatetitle();
    });
  }

  ngOnInit() {
    this.getUserProfile();
    this.getDateAndTime();
  }

  @HostListener("window:scroll", ["$event"])
  onScroll(event) {
    if (window.scrollY >= 86) {
      this.isScroll = false;
    } else {
      this.isScroll = false;
    }
  }

  onChangeLanguage(type) {
    this.languageService.changeLanguage(type);
  }
  onChangeThemes(theme: string) {
    this.renderer.removeAttribute(document.body, 'class');
    this.renderer.addClass(document.body, theme);
  }
  onLogOut() {
    this.authServerProvider.logout();
    // window.location.href = window.location.href.replace(/#.*$/, '');
  }

  getDateAndTime(){
    setInterval(() => {
      this.date = new Date;
    }, 1);
  }

  getUserProfile(){
    this.userProfile = this.principal.getUserIdentity;
  }

  
}
