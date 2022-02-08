import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessedStockRecordComponent } from './processed-stock-record.component';

describe('ProcessedStockRecordComponent', () => {
  let component: ProcessedStockRecordComponent;
  let fixture: ComponentFixture<ProcessedStockRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessedStockRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessedStockRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
