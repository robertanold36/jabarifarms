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
    MatDatepickerModule
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
