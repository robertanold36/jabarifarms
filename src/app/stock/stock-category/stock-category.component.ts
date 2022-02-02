import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { StockComponent } from '../stock/stock.component';

export interface Department{
  name: String;
}

@Component({
  selector: 'app-stock-category',
  templateUrl: './stock-category.component.html',
  styleUrls: ['./stock-category.component.css']
})
export class StockCategoryComponent implements AfterViewInit {

  displayedColumns: string[] = ['S/N', 'name', 'action'];
  dataSource!: MatTableDataSource<Department>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  department: Department[] = [
    {name:"Grading"},
    {name:"Fumigation"},
    {name:"Hand Peeling"},
    {name:"Packing"},

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
    this.router.navigate(['stock-record',name])
  }
  openDialog() {
    const dialogRef = this.dialog.open(StockComponent, {
      height: '90%',
      width: '90%',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngAfterViewInit()
    })
  }

}
