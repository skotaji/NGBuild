import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhotisComponent } from './dhotis.component';

describe('DhotisComponent', () => {
  let component: DhotisComponent;
  let fixture: ComponentFixture<DhotisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhotisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhotisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
