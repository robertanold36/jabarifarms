import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { VendorService } from '../service/vendor.service';
import { VendorPayload } from '../vendor-payload';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {

  addVendorForm!: FormGroup;
  vendorPayload!: VendorPayload;
  isLoading=false

  constructor(private toastr: ToastrService, private vendorService: VendorService,public dialogRef:MatDialogRef<AddVendorComponent>) {
    this.vendorPayload = {
      vendorId: 0,
      name: "",
      phoneNumber: "",
      address: "",
      commission: 0,
      createdDate: new Date(),
      dateOfBirth: new Date,
      idNumber: "",
      registrationNumber: ""

    }
  }

  ngOnInit(): void {

    this.addVendorForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      idNumber: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      dob: new FormControl(new Date(), Validators.required)
    })
  }

  get f() {
    return this.addVendorForm.controls;
  }

  addVendor() {
    this.vendorPayload.name = this.addVendorForm.get('name')?.value;
    this.vendorPayload.phoneNumber = this.addVendorForm.get('phoneNumber')?.value;
    this.vendorPayload.idNumber = this.addVendorForm.get('idNumber')?.value;
    this.vendorPayload.address = this.addVendorForm.get('address')?.value;
    this.vendorPayload.dateOfBirth = this.addVendorForm.get('dob')?.value;

    if (this.f['name'].invalid || this.f['phoneNumber'].invalid || this.f['idNumber'].invalid || this.f['address'].invalid || this.f['dob'].invalid) {
      this.toastr.error("Please fill the fields")

    } else {
      this.isLoading=true
      this.vendorService.registerVendor(this.vendorPayload).subscribe(data => {
        if (data) {
          this.isLoading=false
          this.toastr.success('Vendor registered successfully')
          this.dialogRef.close()
        }
      }, err => {
        this.isLoading=false
        if (err.status == 409) {
          this.toastr.error('Vendor with number ' + this.f['idNumber'].value + " Exist")
          this.dialogRef.close()

        } else {
          this.toastr.error('Internal server error')
          this.dialogRef.close()

        }
      })
    }

  }

}
