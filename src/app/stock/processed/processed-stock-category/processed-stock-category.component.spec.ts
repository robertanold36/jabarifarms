import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessedStockCategoryComponent } from './processed-stock-category.component';

describe('ProcessedStockCategoryComponent', () => {
  let component: ProcessedStockCategoryComponent;
  let fixture: ComponentFixture<ProcessedStockCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessedStockCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessedStockCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
