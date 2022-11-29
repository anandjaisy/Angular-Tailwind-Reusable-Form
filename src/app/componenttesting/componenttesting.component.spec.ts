import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenttestingComponent } from './componenttesting.component';

describe('ComponenttestingComponent', () => {
  let component: ComponenttestingComponent;
  let fixture: ComponentFixture<ComponenttestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenttestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenttestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
