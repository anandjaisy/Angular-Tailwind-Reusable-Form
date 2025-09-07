import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneGroupFormComponent } from './standalone-group-form.component';

describe('StandaloneGroupFormComponent', () => {
  let component: StandaloneGroupFormComponent;
  let fixture: ComponentFixture<StandaloneGroupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandaloneGroupFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneGroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
