import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VendorContractPayload } from '../vendor-contract-payload';
import { formatDate } from "@angular/common";
import {  ActivatedRoute, Params, Router } from '@angular/router';
import { VendorService } from '../service/vendor.service';
import { VendorContractComponent } from '../vendor-contract/vendor-contract.component';
import { VendorPayload } from '../vendor-payload';
import { LocalStorageService } from 'ngx-webstorage';
import { ToastrService } from 'ngx-toastr';

export interface DialogId{
  Id:number
}

@Component({
  selector: 'app-vendor-contract-list',
  templateUrl: './vendor-contract-list.component.html',
  styleUrls: ['./vendor-contract-list.component.css']
})
export class VendorContractListComponent implements AfterViewInit {
  displayedColumns: string[] = ['S/N', 'date', 'amount', 'category', 'commision', 'action'];
  dataSource!: MatTableDataSource<VendorContractPayload>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  format = 'dd/MM/yyyy';
  locale = 'en-US';
  vendorId: number = 0;
  name!: String;
  registrationNumber!: String
  
  public currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'TZS',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });


  formatDateTime(date: number): String {

    return formatDate(new Date(this.getTimeInMills(date) * 1000), this.format, this.locale)
  }

  getTimeInMills(date: number) {
    return date;
  }

  constructor(public dialog: MatDialog, private router: Router,
    private vendorSerivce: VendorService,
    private localStorage: LocalStorageService,
    private toastr: ToastrService,
    private route:ActivatedRoute
  ) {

    this.route.params.subscribe((params: Params) => this.vendorId = params['vendorId']);
    this.name = this.localStorage.retrieve('name-contract');
    this.registrationNumber=this.localStorage.retrieve('registrationNumber-contract')

  }
  ngAfterViewInit(): void {

    this.vendorSerivce.getAllContractsByVendor(this.localStorage.retrieve('vendorId-contract')).subscribe(data => {
      if (data) {
        this.dataSource = new MatTableDataSource<VendorContractPayload>(data)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
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

  openDialog() {
    const dialogRef = this.dialog.open(VendorContractComponent, {
      data:{Id:this.vendorId},
      height: '90%',
      width: '60%',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngAfterViewInit()
    })
  }

  navigateToRecord(vendorContract: VendorContractPayload) {
    this.router.navigate(['contract-record',vendorContract.contractId])
  }


  getCurrencyFormatter(amount: number) {
    return this.currencyFormatter.format(amount)
  }

}

