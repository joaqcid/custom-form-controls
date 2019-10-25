import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceFormControlComponent } from './price-form-control.component';

describe('PriceFormControlComponent', () => {
  let component: PriceFormControlComponent;
  let fixture: ComponentFixture<PriceFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
