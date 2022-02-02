import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChartDataset } from 'chart.js';
import { ToastrService } from 'ngx-toastr';
import { SharedPayload } from 'src/app/shared/shared.payload';
import { StockService } from '../service/stock.service';
import { StockPayload } from '../stock.payload';

export class BarCharDataObject {
  data!: Array<number>
  label!: String
}

@Component({
  selector: 'app-canvas-record',
  templateUrl: './canvas-record.component.html',
  styleUrls: ['./canvas-record.component.css']
})
export class CanvasRecordComponent implements OnInit {

  public barChartLabels: Array<String> = []
  public barChartDataList!: ChartDataset[]
  dataWeightWholes: Array<number> = []
  dataWeightPieces: Array<number> = []
  stockPayloadList:Array<StockPayload>=[]

  @Input() department!:String
  @Output() stockPayloadListEmmitter = new EventEmitter<Array<StockPayload>>();


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
    this.stockService.dailyWhiteStockRecordingData(this.department).subscribe(data => {
      if (data) {
        this.stockPayloadListEmmitter.emit(data)
        let i=0
        for (let stockData of data) {
          if (i == 5) {
            break
          }
          this.dataWeightWholes.push(stockData.totalWholes)
          this.dataWeightPieces.push(stockData.totalPieces)
          this.barChartLabels.push(this.sharedPayload.formatDateTime(stockData.createdDate))
          i++
        }

        this.barChartDataList = [
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
