import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChartDataset } from 'chart.js';
import { ToastrService } from 'ngx-toastr';
import { SharedPayload } from 'src/app/shared/shared.payload';
import { StockProcessedRcn } from '../../processed/stock.processed.rcn';
import { StockService } from '../../service/stock.service';
import { StockRcn } from '../stock.rcn';

@Component({
  selector: 'app-rcn-stock-canvas',
  templateUrl: './rcn-stock-canvas.component.html',
  styleUrls: ['./rcn-stock-canvas.component.css']
})
export class RcnStockCanvasComponent implements OnInit {

  public barChartLabels: Array<String> = []
  public barChartDataList!: ChartDataset[]
  dataWeightBoiled: Array<number> = []
  stockPayloadList:Array<StockProcessedRcn>=[]

  @Input() department!:String
  @Output() stockPayloadListEmmitter = new EventEmitter<Array<StockRcn>>();


  constructor(private stockService: StockService,
    private toastr: ToastrService,
    private sharedPayload: SharedPayload) { }
  
    public barChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true,
  
    };
    public barChartType = 'bar';
    public barChartLegend = true;
  
  

  ngOnInit(): void {
    this.stockService.dailyRcnStockRecordingData(this.department).subscribe(data => {
      if (data) {
        this.stockPayloadListEmmitter.emit(data)
        let i=0
        for (let stockData of data) {
          if (i == 5) {
            break
          }
         
          this.dataWeightBoiled.push(stockData.totalBoiled)
          this.barChartLabels.push(this.sharedPayload.formatDateTime(stockData.createdDate))
          i++
        }

        this.barChartDataList = [
      
          {
            data: this.dataWeightBoiled, label: 'Total Boiled',
          }
        ]
      }
    }, err => {
      if (err.status == 404) {
        this.toastr.error('No Data available for the department')
      } else {
        this.toastr.error('Fail to retrive the information')
      }
    })
  }


}
