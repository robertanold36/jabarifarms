import { Component, OnInit } from '@angular/core';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  faWarehouse=faWarehouse
  faChartBar = faChartBar;
  faChevronRight = faChevronRight;
  faUser = faUser
  faMoneyBill = faMoneyBill
  jabariLogo = "assets/images/jabari.png"
  isSessionExpire: Boolean = false
  department:String='Packing'

  constructor(
  ) {

  }



  ngOnInit(): void {

  }

}
