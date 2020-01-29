import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcalComponent } from './testcal.component';

describe('TestcalComponent', () => {
  let component: TestcalComponent;
  let fixture: ComponentFixture<TestcalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
