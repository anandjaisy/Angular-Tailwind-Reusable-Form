import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneTextareaComponent } from './standalone-textarea.component';

describe('StandaloneTextareaComponent', () => {
  let component: StandaloneTextareaComponent;
  let fixture: ComponentFixture<StandaloneTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandaloneTextareaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandaloneTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
