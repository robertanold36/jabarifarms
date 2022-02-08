import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { StockService } from '../../service/stock.service';
import { StockPayload } from '../stock.payload';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  stockRecordingForm!: FormGroup
  stockPayload!:StockPayload

  constructor(private toastr: ToastrService,
    private stockService: StockService,
    public dialogRef: MatDialogRef<StockComponent>,
    ) {

    this.stockPayload = {
      stockId:0,
      createdDate: 0,
      department: '',
      totalPieces: 0,
      totalWholes: 0,
      lot:''
    }
  }
  

  ngOnInit(): void {

    this.stockRecordingForm = new FormGroup({
      totalPieces: new FormControl('', Validators.required),
      totalWholes: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
      lot:new FormControl('',Validators.required)

    })
  }

  get f() {
    return this.stockRecordingForm.controls;
  }

  saveStock() {
    if (this.stockRecordingForm.invalid) {

      this.toastr.error('Please fill all the field')

    } else {

      this.stockPayload.department = this.stockRecordingForm.get('department')?.value
      this.stockPayload.totalWholes=this.stockRecordingForm.get('totalWholes')?.value
      this.stockPayload.totalPieces = this.stockRecordingForm.get('totalPieces')?.value
      this.stockPayload.lot=this.stockRecordingForm.get('lot')?.value

      this.stockService.dailyWhiteStockRecording(this.stockPayload).subscribe(data => {
        if (data) {
          this.toastr.success('Successfully record the information')
          this.dialogRef.close();
        }
      }, err => {
        if (err.status == 404) {
          this.toastr.error('Department entered not found')
        } else {
          this.toastr.error('Information is not saved successfully')
        }
      })

    }
  }

}
