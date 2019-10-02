import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Example001Component } from './example001.component';

describe('Example001Component', () => {
  let component: Example001Component;
  let fixture: ComponentFixture<Example001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Example001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Example001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
