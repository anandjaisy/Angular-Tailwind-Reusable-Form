import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneChip } from './standalone-chip';

describe('StandaloneChip', () => {
  let component: StandaloneChip;
  let fixture: ComponentFixture<StandaloneChip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandaloneChip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneChip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
