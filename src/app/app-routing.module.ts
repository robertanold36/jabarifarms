import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SidenavComponent } from './appbar/sidenav/sidenav.component';
import { AuthGuard } from './auth/guard/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { ProcessedStockCategoryComponent } from './stock/processed/processed-stock-category/processed-stock-category.component';
import { ProcessedStockRecordComponent } from './stock/processed/processed-stock-record/processed-stock-record.component';
import { RcnStockCategoryRecordComponent } from './stock/rcn-stock/rcn-stock-category-record/rcn-stock-category-record.component';
import { RcnStockCategoryComponent } from './stock/rcn-stock/rcn-stock-category/rcn-stock-category.component';
import { RcnStockRecordComponent } from './stock/rcn-stock/rcn-stock-record/rcn-stock-record.component';
import { StockDashboardComponent } from './stock/stock-dashboard/stock-dashboard.component';
import { StockCategoryComponent } from './stock/white-stock/stock-category/stock-category.component';
import { StockRecordComponent } from './stock/white-stock/stock-record/stock-record.component';
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
    path:'stock',component:StockDashboardComponent,canActivate:[AuthGuard]
  },
  {
    path:'white-stock-category',component:StockCategoryComponent,canActivate:[AuthGuard]
  },
  {
    path:'processed-stock-category',component:ProcessedStockCategoryComponent,canActivate:[AuthGuard]
  },
  {
    path:'rcn-stock-category',component:RcnStockCategoryComponent,canActivate:[AuthGuard]
  },
  
  {
    path:'processed-stock-record/:name',component:ProcessedStockRecordComponent,canActivate:[AuthGuard]
  },

  {
    path:'rcn-stock-record/:name',component:RcnStockRecordComponent,canActivate:[AuthGuard]
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
