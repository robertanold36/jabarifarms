import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SuccessfullyDto } from 'src/app/vendor/successfully-dto';
import { StockPayload } from '../stock.payload';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  url: String = "http://localhost:8080/jabari/api/manage"


  constructor(private httpClient: HttpClient) { }
  
  dailyWhiteStockRecording(stockPayload:StockPayload): Observable<SuccessfullyDto>{
    return this.httpClient.post<SuccessfullyDto>(this.url+"/daily/white/stock/data/save",stockPayload)
  }


  dailyWhiteStockRecordingData(department:String): Observable<Array<StockPayload>>{
    return this.httpClient.get<Array<StockPayload>>(this.url+"/daily/white/stock/data/"+department)
  }

  
}
