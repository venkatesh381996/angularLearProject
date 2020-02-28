import { TestBed, async, inject } from '@angular/core/testing';

import { ChildActiveGuard } from './child-active.guard';

describe('ChildActiveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChildActiveGuard]
    });
  });

  it('should ...', inject([ChildActiveGuard], (guard: ChildActiveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
