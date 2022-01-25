import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SuccessfullyDto } from '../successfully-dto';
import { VendorContractPayload } from '../vendor-contract-payload';
import { VendorContractRecord } from '../vendor-contract-record';
import { VendorPayload } from '../vendor-payload';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  url: String = "http://localhost:8080/jabari/api/vendor"
  
  constructor(private httpClient: HttpClient) { }
  

  registerVendor(vendorPayload: VendorPayload): Observable<SuccessfullyDto>{
    return this.httpClient.post<SuccessfullyDto>(this.url + "/register", vendorPayload);
  }

  getAllVendors(): Observable<Array<VendorPayload>>{
    return this.httpClient.get<Array<VendorPayload>>(this.url + "/get/all/vendors");
  }

  deleteVendor(vendorId:String): Observable<SuccessfullyDto>{
    return this.httpClient.delete<SuccessfullyDto>(this.url+"/delete/"+vendorId)
  }

  saveContract(vendorContractPayload: VendorContractPayload): Observable<SuccessfullyDto>{
    return this.httpClient.post<SuccessfullyDto>(this.url+"/save/contract",vendorContractPayload)
  }

  getAllContracts(): Observable<Array<VendorContractPayload>>{
    return this.httpClient.get<Array<VendorContractPayload>>(this.url + "/get/all/contracts");
  }

  getAllContractsByVendor(vendorId:String): Observable<Array<VendorPayload>>{
    return this.httpClient.get<Array<VendorPayload>>(this.url + "/get/all/contracts/"+vendorId);
  }

  saveContractRecord(vendorContractRecord: VendorContractRecord): Observable<SuccessfullyDto>{
    return this.httpClient.post<SuccessfullyDto>(this.url+"/save/contract",vendorContractRecord)
  }

  getAllContractRecords(contractId:String): Observable<Array<VendorContractRecord>>{
    return this.httpClient.get<Array<VendorContractRecord>>(this.url + "/get/all/contracts/record/"+contractId);
  }

  getAllContractsRecords(): Observable<Array<VendorContractRecord>>{
    return this.httpClient.get<Array<VendorContractRecord>>(this.url + "/get/all/contracts/record");
  }

}
