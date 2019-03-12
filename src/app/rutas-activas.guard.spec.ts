import { TestBed, async, inject } from '@angular/core/testing';

import { RutasActivasGuard } from './rutas-activas.guard';

describe('RutasActivasGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RutasActivasGuard]
    });
  });

  it('should ...', inject([RutasActivasGuard], (guard: RutasActivasGuard) => {
    expect(guard).toBeTruthy();
  }));
});
