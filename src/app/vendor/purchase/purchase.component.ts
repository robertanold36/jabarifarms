import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VendorService } from '../service/vendor.service';
import { DialogId } from '../vendor-contract-list/vendor-contract-list.component';
import { VendorContractRecord } from '../vendor-contract-record';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  purchaseFormGroup!: FormGroup
  vendorRecord!: VendorContractRecord
  isLoading=false

  constructor(private toastr: ToastrService,
    private vendorService: VendorService,
    public dialogRef: MatDialogRef<PurchaseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogId,)
  {
    this.vendorRecord = {
      createdDate: new Date(),
      moisturePercent: 0,
      pricePerKiloPieces: 0,
      pricePerKiloWhole: 0,
      recordId: 0,
      totalPieces: 0,
      totalWholes: 0,
      vendorContractId:0
    }

    console.log(this.data.Id)

   }

  ngOnInit(): void {

    this.purchaseFormGroup = new FormGroup({
      totalWholes: new FormControl('', Validators.required),
      totalPieces: new FormControl('', Validators.required),
      moisturePercent: new FormControl('', Validators.required),
      pricePerKiloPieces: new FormControl('', Validators.required),
      pricePerKiloWholes: new FormControl('', Validators.required)
    })
  }
  get f() {
    return this.purchaseFormGroup.controls;
  }

  saveRecord() {
    if (this.purchaseFormGroup.invalid) {
      this.toastr.error('Please fill all the field')
    } else {
      this.isLoading=true
      this.vendorRecord.moisturePercent = this.purchaseFormGroup.get('moisturePercent')?.value
      this.vendorRecord.totalWholes = this.purchaseFormGroup.get('totalWholes')?.value
      this.vendorRecord.totalPieces = this.purchaseFormGroup.get('totalPieces')?.value
      this.vendorRecord.pricePerKiloWhole = this.purchaseFormGroup.get('pricePerKiloWholes')?.value
      this.vendorRecord.pricePerKiloPieces = this.purchaseFormGroup.get('pricePerKiloPieces')?.value
      this.vendorRecord.vendorContractId=this.data.Id

      this.vendorService.saveContractRecord(this.vendorRecord).subscribe(data => {
        if (data) {
          this.isLoading=false
          this.toastr.success('Record saved successully')
          this.dialogRef.close()
        }
      }, err => {
        this.isLoading=false
        this.toastr.error('Fail to add the record')
      })
    }
  }

}
