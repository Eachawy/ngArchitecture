import { Component, OnInit, Input } from '@angular/core';
import { LanguageStateService } from '@SVIS/language-services';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-token-number',
  templateUrl: './token-number.component.html'
})
export class TokenNumberComponent implements OnInit {

  @Input() tokenPrint: any;

  today= new Date();
  formatToday = '';

  constructor(private languageStateService: LanguageStateService) {
    
  }
    
  ngOnInit() {
    this.formatToday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+02');
  }
}
