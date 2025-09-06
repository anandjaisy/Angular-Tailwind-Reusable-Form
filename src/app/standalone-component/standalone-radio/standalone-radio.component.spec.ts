import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneRadioComponent } from './standalone-radio.component';

describe('StandaloneRadioComponent', () => {
  let component: StandaloneRadioComponent;
  let fixture: ComponentFixture<StandaloneRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandaloneRadioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
