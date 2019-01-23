import { async, TestBed } from '@angular/core/testing';
import { CommonPagesModule } from './common-pages.module';

describe('CommonPagesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonPagesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonPagesModule).toBeDefined();
  });
});
