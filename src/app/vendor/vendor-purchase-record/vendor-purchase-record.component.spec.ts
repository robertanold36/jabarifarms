import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPurchaseRecordComponent } from './vendor-purchase-record.component';

describe('VendorPurchaseRecordComponent', () => {
  let component: VendorPurchaseRecordComponent;
  let fixture: ComponentFixture<VendorPurchaseRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorPurchaseRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorPurchaseRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
