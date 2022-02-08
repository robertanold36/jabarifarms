import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessedStockComponent } from './processed-stock.component';

describe('ProcessedStockComponent', () => {
  let component: ProcessedStockComponent;
  let fixture: ComponentFixture<ProcessedStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessedStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessedStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
