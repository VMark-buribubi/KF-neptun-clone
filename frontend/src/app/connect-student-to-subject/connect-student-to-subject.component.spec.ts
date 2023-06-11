import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectStudentToSubjectComponent } from './connect-student-to-subject.component';

describe('ConnectStudentToSubjectComponent', () => {
  let component: ConnectStudentToSubjectComponent;
  let fixture: ComponentFixture<ConnectStudentToSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectStudentToSubjectComponent]
    });
    fixture = TestBed.createComponent(ConnectStudentToSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
