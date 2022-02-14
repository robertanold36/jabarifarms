import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SuccessfullyDto } from 'src/app/vendor/successfully-dto';
import { StockProcessedRcn } from '../processed/stock.processed.rcn';
import { StockRcn } from '../rcn-stock/stock.rcn';
import { StockPayload } from '../white-stock/stock.payload';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  url: String = "https://jabari-farms.herokuapp.com/jabari/api/manage"


  constructor(private httpClient: HttpClient) { }
  
  dailyWhiteStockRecording(stockPayload:StockPayload): Observable<SuccessfullyDto>{
    return this.httpClient.post<SuccessfullyDto>(this.url+"/daily/white/stock/data/save",stockPayload)
  }


  dailyWhiteStockRecordingData(department:String): Observable<Array<StockPayload>>{
    return this.httpClient.get<Array<StockPayload>>(this.url+"/daily/white/stock/data/"+department)
  }

  dailyProcessedStockRecording(stockPayload:StockProcessedRcn): Observable<SuccessfullyDto>{
    return this.httpClient.post<SuccessfullyDto>(this.url + "/daily/rcn/processed/stock/data/save",stockPayload)
  }


  dailyProcessedStockRecordingData(department:String): Observable<Array<StockProcessedRcn>>{
    return this.httpClient.get<Array<StockProcessedRcn>>(this.url+"/daily/rcn/processed/stock/data/"+department)
  }

  dailyRcnStockRecording(stockPayload:StockRcn): Observable<SuccessfullyDto>{
    return this.httpClient.post<SuccessfullyDto>(this.url+"/daily/rcn/stock/data/save",stockPayload)
  }


  dailyRcnStockRecordingData(department:String): Observable<Array<StockRcn>>{
    return this.httpClient.get<Array<StockRcn>>(this.url+"/daily/rcn/stock/data/"+department)
  }


  
}
