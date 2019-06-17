import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Principal } from '@SVIS/auth';
import { LoginService } from '@SVIS/common-pages';
import * as $ from "jquery";
import { LanguageStateService } from '@SVIS/language-services';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  term = "";
  clear = false;
  mouse_is_inside: boolean = false;
  openSideMenu: boolean = false;
  menuOpen: boolean = false
  openSubMenu: boolean = false;
  childMenu: boolean = false;
  $_this: number = -1;
  version: any;

  /*********** Start Menu List ************/
    public menuList: any[];
  /*********** Ena Menu List ************/
  constructor( private principal: Principal,  
    private loginService: LoginService,
    private languageStateService: LanguageStateService){}

  ngOnInit() {
    // Inti Menu Action
    this.menuList = this.principal.accountObj[0].pages;
    setTimeout(() => {
      location.hash = this.principal.landingPage.url;
    }, 1000);
    this.loginService.getConfigSystem().subscribe( res => {
      this.version = res.body[0].systemNameVersion;
    })
    setTimeout(() => {
      location.hash = this.principal.landingPage;
    }, 1000);
    this.loginService.getConfigSystem().subscribe( res => {
      this.version = res.body["data"][0].systemVersion;
    })
  }
  ngAfterViewInit() {
    this.menuAction();
  }
  /***********  Start Menu Action ************/
  menuClick(i, e: Event) {
    $("ul.sub-menu").removeClass("active");
    $(".main-menu > li").eq(i).parent().find("ul.sub-menu").addClass("active");

    $("#side-bar").addClass("active");
    $(".active-overlay").addClass("overlay");
    $('body').css('overflow','hidden');
    $("li").removeClass("active");
    $(".main-menu > li").eq(i).addClass("active");
  }
  menuAction() {
      $("body").prepend("<div class='active-overlay'></div>");

      $(".sub-menu li > a").on("click", function() {
        if ($(this).next().hasClass("active")) {
          $(this).next().removeClass("active");
          $(".sub-menu li > a").removeClass("up-arrow");
        } else {
          $(this).next().addClass("active");
          $(this).addClass("up-arrow");
        }
      });

      $(document).mouseover(function(e) {
        if ($(e.target).closest("#side-bar").length !== 0) return false;
        $("#side-bar").find(".active").removeClass("active");
        $("#side-bar").removeClass("active");
        $(".sub-menu li > a").removeClass("up-arrow");
        if ($(e.target).closest("#side-bar.active-side-bar").length !== 0)
          return false;
        $("#side-bar.active-side-bar").removeClass("active-side-bar");
        $(".active-overlay").removeClass("overlay");
        $('body').css({"overflow-x": "hidden", "overflow-y":"auto"})
      });

      $('.main-menu a').on('click', function(e){
        const MUrl = $(this).attr('href');
        if(!MUrl){e.preventDefault();}
      });
  }
  /***********  End Menu Action ************/

  /***********  Start Search Menu ************/
  searchChange($event) {
    $event.target.value !== ""
      ? $(".sub-menu li > .child-menu").addClass("active")
      : $(".sub-menu li > .child-menu").removeClass("active");
  }
  // Clear Input Search
  clearInput() {
    this.term = "";
    this.clear = false;
    $(".sub-menu li > .child-menu").removeClass("active");
  }
  /***********  End Search Menu ************/

}
