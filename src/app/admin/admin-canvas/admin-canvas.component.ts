import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-canvas',
  templateUrl: './admin-canvas.component.html',
  styleUrls: ['./admin-canvas.component.css']
})
export class AdminCanvasComponent implements OnInit {
  isLoading = false

  // Pie
  public pieChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,

  };


  public pieChartData!: ChartData<'pie', number[], string | string[]>

  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;

  constructor(private adminService: AdminService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.isLoading = true
    this.adminService.dailyWhiteStockRecordingData().subscribe(data => {
      if (data) {
        this.isLoading = false

        this.pieChartData = {

          labels: ['Total Wholes (Kg)', 'Total Pieces (Kg)'],
          datasets: [{
            data: [data.totalWholes, data.totalPieces]
          }]

        }

      }
    }, err => {
      this.toastr.error('Fail to retrieve information')
    })
  }

}
