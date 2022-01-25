import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddVendorComponent } from '../add-vendor/add-vendor.component';
import { VendorService } from '../service/vendor.service';
import { VendorPayload } from '../vendor-payload';



@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  displayedColumns: string[] = ['vendorId', 'name', 'phoneNumber', 'registrationNumber','Record','Action'];
  dataSource!: MatTableDataSource<VendorPayload>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(public dialog: MatDialog, private router: Router, private vendorService: VendorService,private toastr:ToastrService) {
    
    this.vendorService.getAllVendors().subscribe(data => {
      if (data) {
        this.dataSource = new MatTableDataSource<VendorPayload>(data)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort=this.sort
      }
    }, err => {
      this.toastr.error('internal server problem');
    })
  }

  ngOnInit(): void {
  
  
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


