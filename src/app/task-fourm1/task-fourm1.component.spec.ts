import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFourm1Component } from './task-fourm1.component';

describe('TaskFourm1Component', () => {
  let component: TaskFourm1Component;
  let fixture: ComponentFixture<TaskFourm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskFourm1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFourm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
