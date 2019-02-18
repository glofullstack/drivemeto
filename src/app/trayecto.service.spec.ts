import { TestBed } from '@angular/core/testing';

import { TrayectoService } from './trayecto.service';

describe('TrayectoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrayectoService = TestBed.get(TrayectoService);
    expect(service).toBeTruthy();
  });
});
