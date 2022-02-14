import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StockPurchasedPayload } from './stock-purchased.payload';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url: String = "https://jabari-farms.herokuapp.com/jabari/api/manage"


  constructor(private httpClient: HttpClient) { }

  dailyWhiteStockRecordingData(): Observable<StockPurchasedPayload>{
    return this.httpClient.get<StockPurchasedPayload>(this.url+"/get/white/stock/bought")
  }
}
