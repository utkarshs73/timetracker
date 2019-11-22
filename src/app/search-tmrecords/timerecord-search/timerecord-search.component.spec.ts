import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerecordSearchComponent } from './timerecord-search.component';

describe('TimerecordSearchComponent', () => {
  let component: TimerecordSearchComponent;
  let fixture: ComponentFixture<TimerecordSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerecordSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerecordSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
