import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { AuthService } from './auth/service/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jabarifarms';
  showHead: boolean = false;

  constructor(private router: Router,private authService: AuthService) {
    // on route change to '/login', set the variable showHead to false
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login') {
          this.showHead = false;
        } else {
          // console.log("NU")
          this.showHead = true;
        }
      }
    });

  }

  ngOnInit(): void{
    if (this.authService.sessionAutoLogout()) {
      this.router.navigateByUrl('/login')
    }
  }

}
