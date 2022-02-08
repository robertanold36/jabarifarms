import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SharedPayload } from 'src/app/shared/shared.payload';
import { StockProcessedRcn } from '../../processed/stock.processed.rcn';
import { StockRcn } from '../stock.rcn';

@Component({
  selector: 'app-rcn-stock-category-record',
  templateUrl: './rcn-stock-category-record.component.html',
  styleUrls: ['./rcn-stock-category-record.component.css']
})
export class RcnStockCategoryRecordComponent implements AfterViewInit {

  displayedColumns: string[] = ['S/N', 'date','totalBoiled','lot'];
  dataSource!: MatTableDataSource<StockRcn>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() stockPayloadListData:Array<StockRcn>=[]

  constructor(private sharedPayload:SharedPayload) { 
   
  }

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource<StockRcn>(this.stockPayloadListData)
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

  formatDateTime(date: number) {
    return this.sharedPayload.formatDateTime(date)
  }

}
