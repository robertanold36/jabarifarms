import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { StockPayload } from '../stock.payload';



@Component({
  selector: 'app-stock-record',
  templateUrl: './stock-record.component.html',
  styleUrls: ['./stock-record.component.css']
})
export class StockRecordComponent implements AfterViewInit {

  department!:String

  constructor(private route:ActivatedRoute
    ) {
    this.route.params.subscribe((params: Params) => this.department = params['department']);
  }

  ngAfterViewInit(): void {
      
  }

  getStockPayloadList(stockPayloadList: Array<StockPayload>) {
    console.log(stockPayloadList);
  }

}
