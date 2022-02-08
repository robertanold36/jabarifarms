import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcnStockCategoryRecordComponent } from './rcn-stock-category-record.component';

describe('RcnStockCategoryRecordComponent', () => {
  let component: RcnStockCategoryRecordComponent;
  let fixture: ComponentFixture<RcnStockCategoryRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RcnStockCategoryRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RcnStockCategoryRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
