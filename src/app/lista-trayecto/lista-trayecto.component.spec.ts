import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTrayectoComponent } from './lista-trayecto.component';

describe('ListaTrayectoComponent', () => {
  let component: ListaTrayectoComponent;
  let fixture: ComponentFixture<ListaTrayectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTrayectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTrayectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
