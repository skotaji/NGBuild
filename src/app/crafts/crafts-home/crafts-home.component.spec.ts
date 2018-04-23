import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftsHomeComponent } from './crafts-home.component';

describe('CraftsHomeComponent', () => {
  let component: CraftsHomeComponent;
  let fixture: ComponentFixture<CraftsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraftsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
