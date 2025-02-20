import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingMethodComponent } from './working-method.component';

describe('WorkingMethodComponent', () => {
  let component: WorkingMethodComponent;
  let fixture: ComponentFixture<WorkingMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkingMethodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkingMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
