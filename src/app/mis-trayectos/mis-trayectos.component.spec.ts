import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisTrayectosComponent } from './mis-trayectos.component';

describe('MisTrayectosComponent', () => {
  let component: MisTrayectosComponent;
  let fixture: ComponentFixture<MisTrayectosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisTrayectosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisTrayectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
