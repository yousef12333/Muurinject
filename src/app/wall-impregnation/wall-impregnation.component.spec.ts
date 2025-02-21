import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallImpregnationComponent } from './wall-impregnation.component';

describe('WallImpregnationComponent', () => {
  let component: WallImpregnationComponent;
  let fixture: ComponentFixture<WallImpregnationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WallImpregnationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WallImpregnationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
