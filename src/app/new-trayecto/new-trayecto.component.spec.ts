import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrayectoComponent } from './new-trayecto.component';

describe('NewTrayectoComponent', () => {
  let component: NewTrayectoComponent;
  let fixture: ComponentFixture<NewTrayectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTrayectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTrayectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
