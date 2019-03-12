import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTrayectoComponent } from './detalle-trayecto.component';

describe('DetalleTrayectoComponent', () => {
  let component: DetalleTrayectoComponent;
  let fixture: ComponentFixture<DetalleTrayectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleTrayectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleTrayectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
