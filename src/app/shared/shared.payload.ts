import { formatDate } from "@angular/common";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class SharedPayload{
    format = 'dd/MM/yyyy';
    locale = 'en-US';
    
    public formatDateTime(date: number): String {

        return formatDate(new Date(this.getTimeInMills(date) * 1000), this.format, this.locale)
      }
    
      getTimeInMills(date: number) {
        return date;
    }
    

    public currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'TZS',
      
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });
    
    
}