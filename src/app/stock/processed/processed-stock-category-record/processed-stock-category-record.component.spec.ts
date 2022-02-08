import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessedStockCategoryRecordComponent } from './processed-stock-category-record.component';

describe('ProcessedStockCategoryRecordComponent', () => {
  let component: ProcessedStockCategoryRecordComponent;
  let fixture: ComponentFixture<ProcessedStockCategoryRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessedStockCategoryRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessedStockCategoryRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
