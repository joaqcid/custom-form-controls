import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example003Component } from './example003.component';

describe('Example003Component', () => {
  let component: Example003Component;
  let fixture: ComponentFixture<Example003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
