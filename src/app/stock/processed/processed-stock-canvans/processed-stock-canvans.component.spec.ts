import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessedStockCanvansComponent } from './processed-stock-canvans.component';

describe('ProcessedStockCanvansComponent', () => {
  let component: ProcessedStockCanvansComponent;
  let fixture: ComponentFixture<ProcessedStockCanvansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessedStockCanvansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessedStockCanvansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
