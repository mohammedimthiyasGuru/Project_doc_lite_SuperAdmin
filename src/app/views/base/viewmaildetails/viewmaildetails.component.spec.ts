import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmaildetailsComponent } from './viewmaildetails.component';

describe('ViewmaildetailsComponent', () => {
  let component: ViewmaildetailsComponent;
  let fixture: ComponentFixture<ViewmaildetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmaildetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmaildetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
