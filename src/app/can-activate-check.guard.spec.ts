import { TestBed, async, inject } from '@angular/core/testing';

import { CanActivateCheckGuard } from './can-activate-check.guard';

describe('CanActivateCheckGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateCheckGuard]
    });
  });

  it('should ...', inject([CanActivateCheckGuard], (guard: CanActivateCheckGuard) => {
    expect(guard).toBeTruthy();
  }));
});
