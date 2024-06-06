import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneTextboxComponent } from './standalone-textbox.component';

describe('StandaloneTextboxComponent', () => {
  let component: StandaloneTextboxComponent;
  let fixture: ComponentFixture<StandaloneTextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandaloneTextboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandaloneTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
