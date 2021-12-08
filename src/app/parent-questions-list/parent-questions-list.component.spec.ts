import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentQuestionsListComponent } from './parent-questions-list.component';

describe('ParentQuestionsListComponent', () => {
  let component: ParentQuestionsListComponent;
  let fixture: ComponentFixture<ParentQuestionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentQuestionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentQuestionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
