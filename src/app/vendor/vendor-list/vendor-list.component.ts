import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AddVendorComponent } from '../add-vendor/add-vendor.component';
import { VendorListPayload } from '../vendor-list-payload';
import { VendorPayload } from '../vendor-payload';



@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements AfterViewInit {
  displayedColumns: string[] = ['vendorId', 'name', 'phoneNumber', 'registrationNumber','Record','Action'];
  dataSource!: MatTableDataSource<VendorPayload>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(public dialog:MatDialog,private router:Router) {
    this.dataSource = new MatTableDataSource<VendorPayload>(VendorListPayload)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  

  openDialog() {
    const dialogRef = this.dialog.open(AddVendorComponent, {
      height: '90%',
      width:'50%'
    });
  }

  navigateToVendorContractList(vendorPayload: VendorPayload) {
    this.router.navigate(['vendor-contract-list'], { state: {data:vendorPayload} })
  }
}


