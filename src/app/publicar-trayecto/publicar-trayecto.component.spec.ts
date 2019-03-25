import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarTrayectoComponent } from './publicar-trayecto.component';

describe('PublicarTrayectoComponent', () => {
  let component: PublicarTrayectoComponent;
  let fixture: ComponentFixture<PublicarTrayectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarTrayectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarTrayectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
