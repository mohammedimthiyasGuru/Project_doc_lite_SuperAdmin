import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcataComponent } from './addcata.component';

describe('AddcataComponent', () => {
  let component: AddcataComponent;
  let fixture: ComponentFixture<AddcataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
