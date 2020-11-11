import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaildetailsComponent } from './maildetails.component';

describe('MaildetailsComponent', () => {
  let component: MaildetailsComponent;
  let fixture: ComponentFixture<MaildetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaildetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaildetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
