import { Injectable } from '@angular/core';
import { BinanceResponse } from '@app/core/models/binance-response.model';
import { environment } from '@env/environment.dev';
import { Observable,map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class BinanceService {

  constructor(private http: HttpClient) {}

  connectionLivePricing(): Observable<any> {
    return this.http.get<any[]>(`${environment.binanceApiUrl}/ticker/24hr`).pipe(
      map(markets =>{
        return markets. filter(m=>m.symbol.endsWith('USDT')).sort((a,b)=> parseFloat(b.volume) - parseFloat(a.volume)).slice(0,10);
      })
    )
  }
}
