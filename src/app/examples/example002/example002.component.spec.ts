import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example002Component } from './example002.component';

describe('Example002Component', () => {
  let component: Example002Component;
  let fixture: ComponentFixture<Example002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
