import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneButtonComponent } from './standalone-button.component';

describe('StandaloneButtonComponent', () => {
  let component: StandaloneButtonComponent;
  let fixture: ComponentFixture<StandaloneButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandaloneButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
