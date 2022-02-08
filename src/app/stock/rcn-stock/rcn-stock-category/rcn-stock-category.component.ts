import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Department } from '../../white-stock/stock-category/stock-category.component';

@Component({
  selector: 'app-rcn-stock-category',
  templateUrl: './rcn-stock-category.component.html',
  styleUrls: ['./rcn-stock-category.component.css']
})
export class RcnStockCategoryComponent implements AfterViewInit {

  displayedColumns: string[] = ['S/N', 'name', 'action'];
  dataSource!: MatTableDataSource<Department>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  department: Department[] = [
    {name:"Boiling"}
  ]

  constructor(private dialog:MatDialog,private router:Router) {
   this.dataSource=new MatTableDataSource(this.department)
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

  navigateToRecord(name:String) {
    this.router.navigate(['rcn-stock-record',name])
  }

}
