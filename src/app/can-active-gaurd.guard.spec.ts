import { TestBed, async, inject } from '@angular/core/testing';

import { CanActiveGaurdGuard } from './can-active-gaurd.guard';

describe('CanActiveGaurdGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActiveGaurdGuard]
    });
  });

  it('should ...', inject([CanActiveGaurdGuard], (guard: CanActiveGaurdGuard) => {
    expect(guard).toBeTruthy();
  }));
});
