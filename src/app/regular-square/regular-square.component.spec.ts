import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularSquareComponent } from './regular-square.component';

describe('RegularSquareComponent', () => {
  let component: RegularSquareComponent;
  let fixture: ComponentFixture<RegularSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularSquareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegularSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
