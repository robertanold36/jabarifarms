import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProcessedStockComponent } from '../processed/processed-stock/processed-stock.component';
import { BoilingStockComponent } from '../rcn-stock/boiling-stock/boiling-stock.component';
import { Department } from '../white-stock/stock-category/stock-category.component';
import { StockComponent } from '../white-stock/stock/stock.component';

@Component({
  selector: 'app-stock-dashboard',
  templateUrl: './stock-dashboard.component.html',
  styleUrls: ['./stock-dashboard.component.css']
})
export class StockDashboardComponent implements AfterViewInit {

  displayedColumns: string[] = ['S/N', 'Category', 'Action', 'Record'];
  dataSource!: MatTableDataSource<Department>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  department: Department[] = [
    { name: "White Stock" },
    { name: "Processed" },
    { name: "RCN" },

  ]

  constructor(private dialog: MatDialog, private router: Router) {
    this.dataSource = new MatTableDataSource(this.department)
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

  //to be done here
  navigateToRecord(name: String) {
    //this.router.navigate(['stock-record',name])

    if (name == "White Stock") {

      this.router.navigate(['white-stock-category'])
      
    } else if (name == "Processed") {

      this.router.navigate(['processed-stock-category'])

    } else {

      this.router.navigate(['rcn-stock-category'])

    }

  }
  openDialog(name: String) {

    if (name == "White Stock") {

      const dialogRef = this.dialog.open(StockComponent, {
        height: '90%',
        width: '50%',

      });

      dialogRef.afterClosed().subscribe(result => {
        this.ngAfterViewInit()
      })
    } else if (name == "Processed") {
      const dialogRef = this.dialog.open(ProcessedStockComponent, {
        height: '90%',
        width: '50%',

      });

      dialogRef.afterClosed().subscribe(result => {
        this.ngAfterViewInit()
      })
    } else {
      const dialogRef = this.dialog.open(BoilingStockComponent, {
        
        width: '50%',

      });

      dialogRef.afterClosed().subscribe(result => {
        this.ngAfterViewInit()
      })
    }

  }

}
