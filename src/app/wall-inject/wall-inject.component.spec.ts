import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallInjectComponent } from './wall-inject.component';

describe('WallInjectComponent', () => {
  let component: WallInjectComponent;
  let fixture: ComponentFixture<WallInjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WallInjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WallInjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
