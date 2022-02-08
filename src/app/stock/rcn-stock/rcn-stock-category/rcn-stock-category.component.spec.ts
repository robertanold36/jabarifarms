import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcnStockCategoryComponent } from './rcn-stock-category.component';

describe('RcnStockCategoryComponent', () => {
  let component: RcnStockCategoryComponent;
  let fixture: ComponentFixture<RcnStockCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RcnStockCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RcnStockCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
