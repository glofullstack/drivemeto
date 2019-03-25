import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntraComponent } from './entra.component';

describe('EntraComponent', () => {
  let component: EntraComponent;
  let fixture: ComponentFixture<EntraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
