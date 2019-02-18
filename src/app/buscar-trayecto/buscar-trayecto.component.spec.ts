import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarTrayectoComponent } from './buscar-trayecto.component';

describe('BuscarTrayectoComponent', () => {
  let component: BuscarTrayectoComponent;
  let fixture: ComponentFixture<BuscarTrayectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarTrayectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarTrayectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
