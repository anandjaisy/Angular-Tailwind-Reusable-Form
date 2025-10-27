import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteTextChangeComponent } from './autocomplete-text-change.component';

describe('AutocompleteTextChangeComponent', () => {
  let component: AutocompleteTextChangeComponent;
  let fixture: ComponentFixture<AutocompleteTextChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocompleteTextChangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompleteTextChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
