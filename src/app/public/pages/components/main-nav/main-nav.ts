import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PublicRoutingModule } from '@app/public/public-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-main-nav',
  imports: [RouterModule, MatToolbarModule, PublicRoutingModule, MatIconModule, MatButtonModule],
  templateUrl: './main-nav.html',
  styleUrl: './main-nav.scss',
})
export class MainNav {}
