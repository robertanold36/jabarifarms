import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SidenavComponent } from './appbar/sidenav/sidenav.component';
import { AuthGuard } from './auth/guard/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { AddVendorComponent } from './vendor/add-vendor/add-vendor.component';
import { VendorContractListComponent } from './vendor/vendor-contract-list/vendor-contract-list.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';

const routes: Routes = [
  {
    path: 'sidebar', component: SidenavComponent, canActivate: [AuthGuard]
  },
  {
    path: '', component: DashboardComponent, canActivate: [AuthGuard]
  },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]
  },
  {
    path: 'add-vendor', component: AddVendorComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'vendor-list', component: VendorListComponent, canActivate: [AuthGuard]
  },
  {
    path: 'vendor-contract-list', component: VendorContractListComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
