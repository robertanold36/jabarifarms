import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  isError!: boolean;

  constructor(private toastr: ToastrService, private vendorService: VendorService) {
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
      this.vendorService.registerVendor(this.vendorPayload).subscribe(data => {
        if (data) {
            this.toastr.success('Vendor registered successfully')
        }
      }, err => {
        if (err.status == 409) {
          this.toastr.error('Vendor with number ' + this.f['idNumber'].value + " Exist")
        } else {
          this.toastr.error('Internal server error')
        }
      })
    }

  }

}
