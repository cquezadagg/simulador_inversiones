import { Injectable } from '@angular/core';
import { BinanceResponse } from '@app/core/models/binance-response.model';
import { environment } from '@env/environment.dev';
import { Observable } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class BinanceService {
  private readonly wsUrl = environment.binanceWebSocketUrl

  connectionLivePricing(symbol: string): Observable<any> {
    return webSocket(`${this.wsUrl}/${symbol.toLowerCase()}@ticker`);
  }
}
