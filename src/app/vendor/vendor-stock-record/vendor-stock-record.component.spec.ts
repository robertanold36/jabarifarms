import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorStockRecordComponent } from './vendor-stock-record.component';

describe('VendorStockRecordComponent', () => {
  let component: VendorStockRecordComponent;
  let fixture: ComponentFixture<VendorStockRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorStockRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorStockRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
