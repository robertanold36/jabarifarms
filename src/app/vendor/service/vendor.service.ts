import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SuccessfullyDto } from '../successfully-dto';
import { VendorContractPayload } from '../vendor-contract-payload';
import { VendorContractRecord } from '../vendor-contract-record';
import { VendorPayload } from '../vendor-payload';
import { VendorStockRecordPayload } from '../vendor-stock-record/vendor-stock-record.payload';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  url: String = "https://jabari-farms.herokuapp.com/jabari/api/manage"
  
  constructor(private httpClient: HttpClient) { }
  

  registerVendor(vendorPayload: VendorPayload): Observable<SuccessfullyDto>{
    return this.httpClient.post<SuccessfullyDto>(this.url + "/register", vendorPayload);
  }

  getAllVendors(): Observable<Array<VendorPayload>>{
    return this.httpClient.get<Array<VendorPayload>>(this.url + "/get/all/vendors");
  }


  saveContract(vendorContractPayload: VendorContractPayload): Observable<SuccessfullyDto>{
    return this.httpClient.post<SuccessfullyDto>(this.url+"/save/contract",vendorContractPayload)
  }

  //to be done
  getAllContracts(): Observable<Array<VendorContractPayload>>{
    return this.httpClient.get<Array<VendorContractPayload>>(this.url + "/get/all/contracts");
  }

  getAllContractsByVendor(vendorId:number): Observable<Array<VendorContractPayload>>{
    return this.httpClient.get<Array<VendorContractPayload>>(this.url + "/get/all/contracts/"+vendorId);
  }

  saveContractRecord(vendorContractRecord: VendorContractRecord): Observable<SuccessfullyDto>{
    return this.httpClient.post<SuccessfullyDto>(this.url+"/save/vendor/contract/record",vendorContractRecord)
  }

  getAllContractRecords(contractId:number): Observable<Array<VendorContractRecord>>{
    return this.httpClient.get<Array<VendorContractRecord>>(this.url + "/get/all/contracts/record/"+contractId);
  }

  getAllVendorRecords2021(): Observable<Array<VendorStockRecordPayload>>{
    return this.httpClient.get<Array<VendorStockRecordPayload>>(this.url + "/get/vendor/record/2021");
  }



}
