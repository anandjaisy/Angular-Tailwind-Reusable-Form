import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneDatepickerComponent } from './standalone-datepicker.component';

describe('StandaloneDatepickerComponent', () => {
  let component: StandaloneDatepickerComponent;
  let fixture: ComponentFixture<StandaloneDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandaloneDatepickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandaloneDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
