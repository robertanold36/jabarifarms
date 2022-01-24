import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorContractComponent } from './vendor-contract.component';

describe('VendorContractComponent', () => {
  let component: VendorContractComponent;
  let fixture: ComponentFixture<VendorContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorContractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
