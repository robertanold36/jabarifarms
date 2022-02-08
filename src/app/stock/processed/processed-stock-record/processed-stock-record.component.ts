import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { StockProcessedRcn } from '../stock.processed.rcn';

@Component({
  selector: 'app-processed-stock-record',
  templateUrl: './processed-stock-record.component.html',
  styleUrls: ['./processed-stock-record.component.css']
})
export class ProcessedStockRecordComponent implements AfterViewInit {

  department!: String
  isChecked = false
  stockPayloadList:Array<StockProcessedRcn>=[]

  constructor(private route:ActivatedRoute
    ) {
    this.route.params.subscribe((params: Params) => this.department = params['name']);
  }

  ngAfterViewInit(): void {
      
  }

  getStockPayloadList(stockPayloadList: Array<StockProcessedRcn>) {
    this.stockPayloadList=stockPayloadList
  }

  onChange() {
    !this.isChecked
  }
}
