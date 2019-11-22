import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeRecordAddComponent } from './timerecord-add.component';

describe('TimeRecordAddComponent', () => {
  let component: TimeRecordAddComponent;
  let fixture: ComponentFixture<TimeRecordAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeRecordAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeRecordAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
