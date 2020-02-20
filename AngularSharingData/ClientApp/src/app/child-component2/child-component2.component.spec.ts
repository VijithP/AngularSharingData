import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent2Component } from './child-component2.component';

describe('ChildComponent2Component', () => {
  let component: ChildComponent2Component;
  let fixture: ComponentFixture<ChildComponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildComponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
