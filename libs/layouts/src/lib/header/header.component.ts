import { Component, OnInit, HostListener, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '@SVIS/language-services';
import { AuthServerProvider } from '@SVIS/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  languages: any[];
  themes: any[];
  navObj: any[];

  constructor(
    private languageService: LanguageService,
    private renderer: Renderer2,
    private router: Router,
    private authServerProvider: AuthServerProvider
  ) {
    this.router.events.subscribe(val => {
      this.languageService.translatetitle();
    });
  }

  ngOnInit() {}
  // Fixed Navbar
  isScroll: boolean = false;
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
    this.authServerProvider.logout().subscribe();
    this.router.navigate(['login']);
    window.location.href = window.location.href.replace(/#.*$/, '');
  }
}
