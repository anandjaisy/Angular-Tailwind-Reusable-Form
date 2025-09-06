import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneCheckboxComponent } from './standalone-checkbox.component';

describe('StandaloneCheckboxComponent', () => {
  let component: StandaloneCheckboxComponent;
  let fixture: ComponentFixture<StandaloneCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandaloneCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
