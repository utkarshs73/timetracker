import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeRecordsComponent } from './timerecords.component';

describe('TimeRecordsComponent', () => {
  let component: TimeRecordsComponent;
  let fixture: ComponentFixture<TimeRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
