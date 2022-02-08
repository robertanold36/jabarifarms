import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoilingStockComponent } from './boiling-stock.component';

describe('BoilingStockComponent', () => {
  let component: BoilingStockComponent;
  let fixture: ComponentFixture<BoilingStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoilingStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoilingStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
