import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  faChartBar = faChartBar;
  faChevronRight = faChevronRight;
  faUser = faUser
  faMoneyBill = faMoneyBill
  jabariLogo = "assets/images/jabari.png"
  isSessionExpire:Boolean=false

  constructor(private authService: AuthService,private router:Router) {

   }

  ngOnInit(): void {
   
  }

}
