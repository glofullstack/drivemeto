import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrayectoComponent } from './trayecto.component';

describe('TrayectoComponent', () => {
  let component: TrayectoComponent;
  let fixture: ComponentFixture<TrayectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrayectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrayectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
