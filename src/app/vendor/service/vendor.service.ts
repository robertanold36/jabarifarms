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

  url: String = "http://localhost:8080/jabari/api/manage"
  
  constructor(private httpClient: HttpClient) { }
  

  registerVendor(vendorPayload: VendorPayload): Observable<SuccessfullyDto>{
    return this.httpClient.post<SuccessfullyDto>(this.url + "/register", vendorPayload);
  }

  getAllVendors(): Observable<Array<VendorPayload>>{
    return this.httpClient.get<Array<VendorPayload>>(this.url + "/get/all/vendors");
  }

  //to be done
  deleteVendor(vendorId:String): Observable<SuccessfullyDto>{
    return this.httpClient.delete<SuccessfullyDto>(this.url+"/delete/"+vendorId)
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

  //to be done
  getAllContractsRecords(): Observable<Array<VendorContractRecord>>{
    return this.httpClient.get<Array<VendorContractRecord>>(this.url + "/get/all/contracts/record");
  }

}
