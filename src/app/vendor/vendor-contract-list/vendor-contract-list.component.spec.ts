import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorContractListComponent } from './vendor-contract-list.component';

describe('VendorContractListComponent', () => {
  let component: VendorContractListComponent;
  let fixture: ComponentFixture<VendorContractListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorContractListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorContractListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
