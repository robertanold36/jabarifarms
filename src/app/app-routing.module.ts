import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SidenavComponent } from './appbar/sidenav/sidenav.component';
import { AuthGuard } from './auth/guard/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { StockCategoryComponent } from './stock/stock-category/stock-category.component';
import { StockRecordComponent } from './stock/stock-record/stock-record.component';
import { StockComponent } from './stock/stock/stock.component';
import { AddVendorComponent } from './vendor/add-vendor/add-vendor.component';
import { VendorContractListComponent } from './vendor/vendor-contract-list/vendor-contract-list.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorPurchaseRecordComponent } from './vendor/vendor-purchase-record/vendor-purchase-record.component';

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
    path: 'vendor-contract-list/:vendorId', component: VendorContractListComponent, canActivate: [AuthGuard]
  },
  {
  path:'contract-record/:contractId',component:VendorPurchaseRecordComponent,canActivate:[AuthGuard]
  },
  {
    path:'stock',component:StockCategoryComponent,canActivate:[AuthGuard]
  },
  {
    path:'stock-record/:department',component:StockRecordComponent,canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
