import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswersManagementComponent } from './answers-management.component';

describe('AnswersManagement', () => {
  let component: AnswersManagementComponent;
  let fixture: ComponentFixture<AnswersManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnswersManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswersManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
