import { async, TestBed } from '@angular/core/testing';
import { CustomElementsModule } from './custom-elements.module';

describe('CustomElementsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CustomElementsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CustomElementsModule).toBeDefined();
  });
});
