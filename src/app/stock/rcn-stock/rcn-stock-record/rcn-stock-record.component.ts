import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { StockRcn } from '../stock.rcn';

@Component({
  selector: 'app-rcn-stock-record',
  templateUrl: './rcn-stock-record.component.html',
  styleUrls: ['./rcn-stock-record.component.css']
})
export class RcnStockRecordComponent implements AfterViewInit {

  department!: String
  isChecked = false
  stockPayloadList:Array<StockRcn>=[]

  constructor(private route:ActivatedRoute
    ) {
    this.route.params.subscribe((params: Params) => this.department = params['name']);
  }

  ngAfterViewInit(): void {
      
  }

  getStockPayloadList(stockPayloadList: Array<StockRcn>) {
    this.stockPayloadList=stockPayloadList
  }

  onChange() {
    !this.isChecked
  }

}
