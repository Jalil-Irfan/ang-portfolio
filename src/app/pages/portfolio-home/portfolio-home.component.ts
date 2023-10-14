import { Component } from '@angular/core';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { AnchorComponent } from 'src/app/components/anchor/anchor.component';

@Component({
  selector: 'app-portfolio-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, AnchorComponent],
  templateUrl: './portfolio-home.component.html',
  styleUrls: ['./portfolio-home.component.css']
})
export class PortfolioHomeComponent {

}
