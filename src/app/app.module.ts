import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarModule } from 'ng-sidebar';
import { SidenavComponent } from './appbar/sidenav/sidenav.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddVendorComponent } from './vendor/add-vendor/add-vendor.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './appbar/header/header.component';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthInterceptor} from 'src/app/auth/interceptor/auth.interceptor';
import { PurchaseComponent } from './vendor/purchase/purchase.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorPurchaseRecordComponent } from './vendor/vendor-purchase-record/vendor-purchase-record.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { VendorContractListComponent } from './vendor/vendor-contract-list/vendor-contract-list.component';
import { VendorContractComponent } from './vendor/vendor-contract/vendor-contract.component';
import { StockRecordComponent } from './stock/white-stock/stock-record/stock-record.component';
import { NgChartsModule } from 'ng2-charts';
import { CanvasRecordComponent } from './stock/canvas-record/canvas-record.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { BoilingStockComponent } from './stock/rcn-stock/boiling-stock/boiling-stock.component';
import { ProcessedStockComponent } from './stock/processed/processed-stock/processed-stock.component';
import { RcnStockCategoryComponent } from './stock/rcn-stock/rcn-stock-category/rcn-stock-category.component';
import { RcnStockRecordComponent } from './stock/rcn-stock/rcn-stock-record/rcn-stock-record.component';
import { ProcessedStockCategoryComponent } from './stock/processed/processed-stock-category/processed-stock-category.component';
import { ProcessedStockRecordComponent } from './stock/processed/processed-stock-record/processed-stock-record.component';
import { StockCategoryRecordComponent } from './stock/white-stock/stock-category-record/stock-category-record.component';
import { StockCategoryComponent } from './stock/white-stock/stock-category/stock-category.component';
import { StockComponent } from './stock/white-stock/stock/stock.component';
import { StockDashboardComponent } from './stock/stock-dashboard/stock-dashboard.component';
import { ProcessedStockCategoryRecordComponent } from './stock/processed/processed-stock-category-record/processed-stock-category-record.component';
import { ProcessedStockCanvansComponent } from './stock/processed/processed-stock-canvans/processed-stock-canvans.component';
import { RcnStockCanvasComponent } from './stock/rcn-stock/rcn-stock-canvas/rcn-stock-canvas.component';
import { RcnStockCategoryRecordComponent } from './stock/rcn-stock/rcn-stock-category-record/rcn-stock-category-record.component';
import { AdminCanvasComponent } from './admin/admin-canvas/admin-canvas.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent,
    AddVendorComponent,
    LoginComponent,
    HeaderComponent,
    PurchaseComponent,
    VendorListComponent,
    VendorPurchaseRecordComponent,
    VendorContractListComponent,
    VendorContractComponent,
    StockComponent,
    StockRecordComponent,
    StockCategoryComponent,
    CanvasRecordComponent,
    StockCategoryRecordComponent,
    BoilingStockComponent,
    ProcessedStockComponent,
    ProcessedStockCategoryComponent,
    RcnStockCategoryComponent,
    ProcessedStockRecordComponent,
    RcnStockRecordComponent,
    StockDashboardComponent,
    ProcessedStockCategoryRecordComponent,
    ProcessedStockCanvansComponent,
    RcnStockCanvasComponent,
    RcnStockCategoryRecordComponent,
    AdminCanvasComponent,
    SpinnerComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SidebarModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSidenavModule,
    MatDialogModule,
    MatButtonModule,
    MatDatepickerModule,
    NgChartsModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
