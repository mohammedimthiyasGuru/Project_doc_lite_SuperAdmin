import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndreportComponent } from './endreport.component';

describe('EndreportComponent', () => {
  let component: EndreportComponent;
  let fixture: ComponentFixture<EndreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
