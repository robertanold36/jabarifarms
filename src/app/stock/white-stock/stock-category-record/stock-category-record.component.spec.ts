import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCategoryRecordComponent } from './stock-category-record.component';

describe('StockCategoryRecordComponent', () => {
  let component: StockCategoryRecordComponent;
  let fixture: ComponentFixture<StockCategoryRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockCategoryRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCategoryRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
