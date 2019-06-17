import { async, TestBed } from '@angular/core/testing';
import { SharedLibsModule } from './shared-libs.module';

describe('SharedLibsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedLibsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedLibsModule).toBeDefined();
  });
});
