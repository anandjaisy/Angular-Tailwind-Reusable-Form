import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneAutocompleteComponent } from './standalone-autocomplete.component';

describe('StandaloneAutocompleteComponent', () => {
  let component: StandaloneAutocompleteComponent;
  let fixture: ComponentFixture<StandaloneAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandaloneAutocompleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
