import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VendorService } from '../service/vendor.service';
import { DialogId } from '../vendor-contract-list/vendor-contract-list.component';
import { VendorContractPayload } from '../vendor-contract-payload';

@Component({
  selector: 'app-vendor-contract',
  templateUrl: './vendor-contract.component.html',
  styleUrls: ['./vendor-contract.component.css']
})
export class VendorContractComponent implements OnInit {

  vendorContractForm!: FormGroup
  vendorContractPayload!: VendorContractPayload
  isLoading=false

  constructor(private toastr: ToastrService,
    private vendorService: VendorService,
    public dialogRef: MatDialogRef<VendorContractComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: DialogId,) {

    this.vendorContractPayload = {
      amount: 0,
      amountPerKG: 0,
      category: '',
      commissionAmountPerKG: 0,
      contractId: 0,
      createdDate: new Date(),
      paymentAccount: '',
      paymentMethod: '',
      vendorId: 0
    }

    console.log(data.Id)
  }

  ngOnInit(): void {
    this.vendorContractForm = new FormGroup({
      amount: new FormControl('', Validators.required),
      amountPerKG: new FormControl('', Validators.required),
      commissionAmountPerKG: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      paymentMethod: new FormControl('', Validators.required)

    })

  }

  get f() {
    return this.vendorContractForm.controls;
  }

  addContract() {
    if (this.vendorContractForm.invalid) {
      this.toastr.error('Please fill all the field')
    } else {
      this.isLoading=true
      this.vendorContractPayload.amount = this.vendorContractForm.get('amount')?.value;
      this.vendorContractPayload.amountPerKG = this.vendorContractForm.get('amountPerKG')?.value;
      this.vendorContractPayload.vendorId = this.data.Id
      this.vendorContractPayload.commissionAmountPerKG = this.vendorContractForm.get('commissionAmountPerKG')?.value;
      this.vendorContractPayload.category = this.vendorContractForm.get('category')?.value;
      this.vendorContractPayload.paymentMethod = this.vendorContractForm.get('paymentMethod')?.value;


      this.vendorService.saveContract(this.vendorContractPayload).subscribe(data => {
        if (data) {
          this.isLoading=false
          this.toastr.success('Successfully saved the contract')
          this.dialogRef.close();
        }
      }, err => {
        this.isLoading=false
        if (err.status == 403) {
          this.toastr.error('Session expired please login again')
          this.router.navigateByUrl('/')

        } else if (err.status == 404) {
          this.toastr.error('Vendor with id number is ' + this.vendorContractPayload.vendorId + " not registered");
          this.dialogRef.close();

        } else if (err.status == 406) {
          this.toastr.error('Vendor is not allowed to take contract');
          this.dialogRef.close();

        } else {
          this.toastr.error('Fail to save contract')
          this.dialogRef.close();

        }
      })


    }
  }

}
