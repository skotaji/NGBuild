import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoolenComponent } from './woolen.component';

describe('WoolenComponent', () => {
  let component: WoolenComponent;
  let fixture: ComponentFixture<WoolenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoolenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoolenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
