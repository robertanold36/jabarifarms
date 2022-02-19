import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { VendorService } from '../service/vendor.service';
import { VendorStockRecordPayload } from './vendor-stock-record.payload';

@Component({
  selector: 'app-vendor-stock-record',
  templateUrl: './vendor-stock-record.component.html',
  styleUrls: ['./vendor-stock-record.component.css']
})
export class VendorStockRecordComponent implements AfterViewInit {

  displayedColumns: string[] = ['S/N', 'name', 'phone number', 'amount', 'weight'];
  dataSource!: MatTableDataSource<VendorStockRecordPayload>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  totalWeight!: number;
  totalAmount!: number;

  vendorId: number = 0;
  name!: String;
  registrationNumber!: String
  copiedData!:string;


  public currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'TZS',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  constructor(
    private vendorSerivce: VendorService,
    private toastr: ToastrService
  ) {


  }
  ngAfterViewInit(): void {

    this.vendorSerivce.getAllVendorRecords2021().subscribe(data => {
      if (data) {
        this.dataSource = new MatTableDataSource<VendorStockRecordPayload>(data)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
        this.copiedData=JSON.stringify(this.dataSource.data)

        let weight = 0;
        let amount = 0;
        for (let vendorStockRecordPayload of data) {
          weight += vendorStockRecordPayload.totalWeight;
          amount += vendorStockRecordPayload.totalAmount
        }

        this.totalAmount = amount;
        this.totalWeight = Math.round(weight);
      }
    }, err => {
      this.toastr.error('There problem while get content')
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getCurrencyFormatter(amount: number) {
    return this.currencyFormatter.format(amount)
  }
}
