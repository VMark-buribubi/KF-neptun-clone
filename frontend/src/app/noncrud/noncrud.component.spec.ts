import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoncrudComponent } from './noncrud.component';

describe('NoncrudComponent', () => {
  let component: NoncrudComponent;
  let fixture: ComponentFixture<NoncrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoncrudComponent]
    });
    fixture = TestBed.createComponent(NoncrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
