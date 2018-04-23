import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodenComponent } from './wooden.component';

describe('WoodenComponent', () => {
  let component: WoodenComponent;
  let fixture: ComponentFixture<WoodenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoodenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
