import { Component,  inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BinanceService } from '@app/core/services/binance/binance.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MainNav } from '../components/main-nav/main-nav';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatCardModule, MainNav, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true
})
export class Home {
  private binanceService = inject(BinanceService);

  //INFO: se usan signals
  topCoins = toSignal(this.binanceService.connectionLivePricing(), {initialValue: null});
}
