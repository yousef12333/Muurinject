import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellarTreatmentComponent } from './cellar-treatment.component';

describe('CellarTreatmentComponent', () => {
  let component: CellarTreatmentComponent;
  let fixture: ComponentFixture<CellarTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CellarTreatmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellarTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
