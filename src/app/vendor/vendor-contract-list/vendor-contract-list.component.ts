import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VendorContractPayload } from '../vendor-contract-payload';
import { formatDate } from "@angular/common";
import { PurchaseComponent } from '../purchase/purchase.component';
import { Router } from '@angular/router';
import { VendorService } from '../service/vendor.service';


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

  formatDateTime(date: Date): String {
    return formatDate(date, this.format, this.locale)
  }

  constructor(public dialog: MatDialog, private router: Router,private vendorService:VendorService) {
    //console.log(this.router.getCurrentNavigation().extras.state['data'])
    this.dataSource = new MatTableDataSource<VendorContractPayload>(VendorContractListPayload)
  }
  ngAfterViewInit(): void {
  
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(PurchaseComponent, {
      height: '90%',
      width: '90%',
    });
  }

 

}

export const VendorContractListPayload: VendorContractPayload[] = [
  {
    contractId: 1,
    registrationNumber: "200-1",
    commissionAmountPerKG: 100,
    createdDate: new Date(),
    category: "SPC",
    amount: 400000,
    amountPerKG: 200,
    paymentAccount: "",
    paymentMethod:""
  },
  {
    contractId: 1,
    registrationNumber: "200-2",
    commissionAmountPerKG: 150,
    createdDate: new Date(),
    category: "WCN",
    amount: 4200000,
    amountPerKG: 200,
    paymentAccount: "",
    paymentMethod:""
  },
  {
    contractId: 1,
    registrationNumber: "200-1",
    commissionAmountPerKG: 200,
    createdDate: new Date(),
    category: "SPN",
    amount: 900000,
    amountPerKG: 200,
    paymentAccount: "",
    paymentMethod:""
  },
  {
    contractId: 1,
    registrationNumber: "200-1",
    commissionAmountPerKG: 200,
    createdDate: new Date(),
    category: "WCN",
    amount: 700000,
    amountPerKG: 200,
    paymentAccount: "",
    paymentMethod:""
  },
  {
    contractId: 1,
    registrationNumber: "200-1",
    commissionAmountPerKG: 150,
    createdDate: new Date(),
    category: "WCN",
    amount: 400000,
    amountPerKG: 200,
    paymentAccount: "",
    paymentMethod:""
  },
  {
    contractId: 1,
    registrationNumber: "200-1",
    commissionAmountPerKG: 200,
    createdDate: new Date(),
    category: "SPN",
    amount: 400000,
    amountPerKG: 200,
    paymentAccount: "",
    paymentMethod:""
  },
  {
    contractId: 1,
    registrationNumber: "200-1",
    commissionAmountPerKG: 350,
    createdDate: new Date(),
    category: "WCN",
    amount: 400000,
    amountPerKG: 200,
    paymentAccount: "",
    paymentMethod:""
  },
  {
    contractId: 1,
    registrationNumber: "200-1",
    commissionAmountPerKG: 200,
    createdDate: new Date(),
    category: "SPN",
    amount: 600000,
    amountPerKG: 200,
    paymentAccount: "",
    paymentMethod:""
  },
  {
    contractId: 1,
    registrationNumber: "200-1",
    commissionAmountPerKG: 400,
    createdDate: new Date(),
    category: "WCN",
    amount: 400000,
    amountPerKG: 200,
    paymentAccount: "",
    paymentMethod:""
  },
  {
    contractId: 1,
    registrationNumber: "200-1",
    commissionAmountPerKG: 200,
    createdDate: new Date(),
    category: "SPN",
    amount: 500000,
    amountPerKG: 200,
    paymentAccount: "",
    paymentMethod:""
  },

]
