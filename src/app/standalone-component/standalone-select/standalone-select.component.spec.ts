import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneSelectComponent } from './standalone-select.component';

describe('StandaloneSelectComponent', () => {
  let component: StandaloneSelectComponent;
  let fixture: ComponentFixture<StandaloneSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandaloneSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandaloneSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
