import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DampProofingComponent } from './damp-proofing.component';

describe('DampProofingComponent', () => {
  let component: DampProofingComponent;
  let fixture: ComponentFixture<DampProofingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DampProofingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DampProofingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
