import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectSubjectToTeacherComponent } from './connect-subject-to-teacher.component';

describe('ConnectSubjectToTeacherComponent', () => {
  let component: ConnectSubjectToTeacherComponent;
  let fixture: ComponentFixture<ConnectSubjectToTeacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectSubjectToTeacherComponent]
    });
    fixture = TestBed.createComponent(ConnectSubjectToTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
