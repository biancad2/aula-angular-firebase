import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireQuestionComponent } from './fire-question.component';

describe('FireQuestionComponent', () => {
  let component: FireQuestionComponent;
  let fixture: ComponentFixture<FireQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
