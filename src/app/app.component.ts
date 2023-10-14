import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioHomeComponent } from './pages/portfolio-home/portfolio-home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PortfolioHomeComponent, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-portfolio';
}
