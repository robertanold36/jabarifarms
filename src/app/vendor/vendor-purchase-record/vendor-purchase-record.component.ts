import { formatDate } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'ngx-webstorage';
import { PurchaseComponent } from '../purchase/purchase.component';
import { VendorService } from '../service/vendor.service';
import { VendorContractRecord } from '../vendor-contract-record';

@Component({
  selector: 'app-vendor-purchase-record',
  templateUrl: './vendor-purchase-record.component.html',
  styleUrls: ['./vendor-purchase-record.component.css']
})
export class VendorPurchaseRecordComponent implements AfterViewInit {

  displayedColumns: string[] = ['S/N', 'date', 'totalWholes', 'totalPieces', 'price','moisturePercent'];
  dataSource!: MatTableDataSource<VendorContractRecord>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  totalPrice!:String

  public currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'TZS',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  format = 'dd/MM/yyyy';
  locale = 'en-US';
  name!: String;
  registrationNumber!: String
  contractId!:number


  public formatDateTime(date: number): String {

    return formatDate(new Date(this.getTimeInMills(date) * 1000), this.format, this.locale)
  }

  getTimeInMills(date: number) {
    return date;
  }

  constructor(
    public dialog: MatDialog, private router: Router,
    private vendorSerivce: VendorService,
    private localStorage: LocalStorageService,
    private toastr: ToastrService,
    private route:ActivatedRoute
  ) {
    this.route.params.subscribe((params: Params) => this.contractId = params['contractId']);
    this.name = this.localStorage.retrieve('name-contract');
    this.registrationNumber = this.localStorage.retrieve('registrationNumber-contract')
    console.log(this.contractId)
   }


  ngAfterViewInit(): void {
    
    this.vendorSerivce.getAllContractRecords(this.contractId).subscribe(data => {
      if (data) {
        this.dataSource = new MatTableDataSource<VendorContractRecord>(data)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
        this.totalPrice=this.currencyFormatter.format(this.getSum(data))
      }
    }, err => {
      this.toastr.error('There problem while getting content')
    })

  }

  getPrice(vendorContractRecord: VendorContractRecord) {
    return this.currencyFormatter.format(Math.round(((vendorContractRecord.totalWholes) * (vendorContractRecord.pricePerKiloWhole))
      + ((vendorContractRecord.totalPieces) * (vendorContractRecord.pricePerKiloPieces))))
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //to be changed
  openDialog() {
    const dialogRef = this.dialog.open(PurchaseComponent, {
      data:{Id:this.contractId},
      height: '90%',
      width: '60%',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngAfterViewInit()
    })
  }

  getSum(vendorRecordList:Array<VendorContractRecord>) {
    let sum = 0.0
    console.log(this.dataSource.filteredData)
    this.dataSource.filteredData.forEach(vendorContractRecord =>
      sum+=(((vendorContractRecord.totalWholes) * (vendorContractRecord.pricePerKiloWhole))
        + ((vendorContractRecord.totalPieces) * (vendorContractRecord.pricePerKiloPieces))))
  
    return sum;
  }

  
}
