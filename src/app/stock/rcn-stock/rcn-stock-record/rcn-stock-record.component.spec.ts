import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcnStockRecordComponent } from './rcn-stock-record.component';

describe('RcnStockRecordComponent', () => {
  let component: RcnStockRecordComponent;
  let fixture: ComponentFixture<RcnStockRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RcnStockRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RcnStockRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
