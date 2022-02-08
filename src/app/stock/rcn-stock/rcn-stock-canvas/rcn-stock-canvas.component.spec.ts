import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcnStockCanvasComponent } from './rcn-stock-canvas.component';

describe('RcnStockCanvasComponent', () => {
  let component: RcnStockCanvasComponent;
  let fixture: ComponentFixture<RcnStockCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RcnStockCanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RcnStockCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
