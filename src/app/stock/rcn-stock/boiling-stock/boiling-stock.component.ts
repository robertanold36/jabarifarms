import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { StockProcessedRcn } from '../../processed/stock.processed.rcn';
import { StockService } from '../../service/stock.service';
import { StockComponent } from '../../white-stock/stock/stock.component';
import { StockRcn } from '../stock.rcn';

@Component({
  selector: 'app-boiling-stock',
  templateUrl: './boiling-stock.component.html',
  styleUrls: ['./boiling-stock.component.css']
})
export class BoilingStockComponent implements OnInit {

  stockRecordingForm!: FormGroup
  stockPayload!:StockRcn

  constructor(private toastr: ToastrService,
    private stockService: StockService,
    public dialogRef: MatDialogRef<StockComponent>,
    ) {

    this.stockPayload = {
      stockId: 0,
      totalBoiled:0,
      createdDate: 0,
      department: '',
      lot:''
    }
  }
  

  ngOnInit(): void {

    this.stockRecordingForm = new FormGroup({
      totalBoiled: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
      lot: new FormControl('', Validators.required),

    })
  }

  get f() {
    return this.stockRecordingForm.controls;
  }

  saveStock() {
    if (this.stockRecordingForm.invalid) {

      this.toastr.error('Please fill all the field')

    } else {

      this.stockPayload.totalBoiled = this.stockRecordingForm.get('totalBoiled')?.value
      this.stockPayload.department = this.stockRecordingForm.get('department')?.value
      this.stockPayload.lot=this.stockRecordingForm.get('lot')?.value

      this.stockService.dailyRcnStockRecording(this.stockPayload).subscribe(data => {
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
