import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleBottomSheetComponent } from './example-bottom-sheet.component';

describe('BottomSheetComponent', () => {
  let component: ExampleBottomSheetComponent;
  let fixture: ComponentFixture<ExampleBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExampleBottomSheetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExampleBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
