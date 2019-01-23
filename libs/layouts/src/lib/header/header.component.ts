import { Component, OnInit, HostListener, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'libs/language-services/src/lib/language.service';
import { AuthServerProvider } from 'libs/auth/src/lib/auth-jwt';

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
    private AuthServerProvider: AuthServerProvider
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
    this.AuthServerProvider.logout().subscribe();
    this.router.navigate(['login']);
    location.reload();
  }
}
