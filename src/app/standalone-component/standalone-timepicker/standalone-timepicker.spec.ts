import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneTimepicker } from './standalone-timepicker';

describe('StandaloneTimepicker', () => {
  let component: StandaloneTimepicker;
  let fixture: ComponentFixture<StandaloneTimepicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandaloneTimepicker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneTimepicker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
