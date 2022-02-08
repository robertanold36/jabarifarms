import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChartDataset } from 'chart.js';
import { ToastrService } from 'ngx-toastr';
import { SharedPayload } from 'src/app/shared/shared.payload';
import { StockService } from '../../service/stock.service';
import { StockProcessedRcn } from '../stock.processed.rcn';

export class BarCharDataObject {
  data!: Array<number>
  label!: String
}


@Component({
  selector: 'app-processed-stock-canvans',
  templateUrl: './processed-stock-canvans.component.html',
  styleUrls: ['./processed-stock-canvans.component.css']
})
export class ProcessedStockCanvansComponent implements OnInit {

  public barChartLabels: Array<String> = []
  public barChartDataList!: ChartDataset[]
  dataWeightWholes: Array<number> = []
  dataWeightPieces: Array<number> = []
  dataWeightProcessed: Array<number> = []
  stockPayloadList:Array<StockProcessedRcn>=[]

  @Input() department!:String
  @Output() stockPayloadListEmmitter = new EventEmitter<Array<StockProcessedRcn>>();


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
    this.stockService.dailyProcessedStockRecordingData(this.department).subscribe(data => {
      if (data) {
        this.stockPayloadListEmmitter.emit(data)
        let i=0
        for (let stockData of data) {
          if (i == 5) {
            break
          }
          this.dataWeightWholes.push(stockData.totalWholes)
          this.dataWeightPieces.push(stockData.totalPieces)
          this.dataWeightProcessed.push(stockData.totalProcessed)
          this.barChartLabels.push(this.sharedPayload.formatDateTime(stockData.createdDate))
          i++
        }

        this.barChartDataList = [
          {
            data:this.dataWeightProcessed,label:'Total Processed'
          },
          {
            data: this.dataWeightWholes, label: 'Total Wholes',
          },
          {
            data: this.dataWeightPieces, label: 'Total Pieces',
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
