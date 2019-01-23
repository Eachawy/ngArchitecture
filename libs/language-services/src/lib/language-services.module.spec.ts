import { async, TestBed } from '@angular/core/testing';
import { LanguageServicesModule } from './language-services.module';

describe('LanguageServicesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LanguageServicesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LanguageServicesModule).toBeDefined();
  });
});
