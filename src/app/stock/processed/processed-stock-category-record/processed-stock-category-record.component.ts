import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SharedPayload } from 'src/app/shared/shared.payload';
import { StockPayload } from '../../white-stock/stock.payload';
import { StockProcessedRcn } from '../stock.processed.rcn';

@Component({
  selector: 'app-processed-stock-category-record',
  templateUrl: './processed-stock-category-record.component.html',
  styleUrls: ['./processed-stock-category-record.component.css']
})
export class ProcessedStockCategoryRecordComponent implements AfterViewInit {

  displayedColumns: string[] = ['S/N', 'date','totalProcessed', 'totalWholes', 'totalPieces', 'lot'];
  dataSource!: MatTableDataSource<StockProcessedRcn>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() stockPayloadListData:Array<StockProcessedRcn>=[]

  constructor(private sharedPayload:SharedPayload) { 
   
  }

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource<StockProcessedRcn>(this.stockPayloadListData)
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
