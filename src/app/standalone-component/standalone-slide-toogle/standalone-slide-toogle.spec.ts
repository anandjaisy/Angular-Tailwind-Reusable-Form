import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneSlideToogle } from './standalone-slide-toogle';

describe('StandaloneSlideToogle', () => {
  let component: StandaloneSlideToogle;
  let fixture: ComponentFixture<StandaloneSlideToogle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandaloneSlideToogle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneSlideToogle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
