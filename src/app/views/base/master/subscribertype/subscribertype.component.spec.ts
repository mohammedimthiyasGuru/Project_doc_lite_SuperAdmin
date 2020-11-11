import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribertypeComponent } from './subscribertype.component';

describe('SubscribertypeComponent', () => {
  let component: SubscribertypeComponent;
  let fixture: ComponentFixture<SubscribertypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribertypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribertypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
