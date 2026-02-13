import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MainNav } from '../components/main-nav/main-nav';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatCardModule, MainNav],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true
})
export class Home {}
