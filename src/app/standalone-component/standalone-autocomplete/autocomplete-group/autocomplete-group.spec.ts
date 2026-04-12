import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteGroup } from './autocomplete-group';

describe('AutocompleteGroup', () => {
  let component: AutocompleteGroup;
  let fixture: ComponentFixture<AutocompleteGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutocompleteGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompleteGroup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
