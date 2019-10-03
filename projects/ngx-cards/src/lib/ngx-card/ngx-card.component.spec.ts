import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCardComponent } from './ngx-card.component';

describe('NgxCardComponent', () => {
  let component: NgxCardComponent;
  let fixture: ComponentFixture<NgxCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
