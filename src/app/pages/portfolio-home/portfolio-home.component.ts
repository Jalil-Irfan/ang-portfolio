import { Component } from '@angular/core';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { AnchorComponent } from 'src/app/components/anchor/anchor.component';
import { DataServiceService } from 'src/app/services/data-service/data-service.service';
import { TruncatePipe } from 'src/app/pipes/truncate/truncate.pipe';

@Component({
  selector: 'app-portfolio-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, AnchorComponent,TruncatePipe],
  templateUrl: './portfolio-home.component.html',
  styleUrls: ['./portfolio-home.component.css']
})
export class PortfolioHomeComponent {
  longText:string = "abcdefghijklmnopqrstuvwxyz";
  constructor(private dataService: DataServiceService) { 
    
  }
  changeName(){
    console.log('clicked');
    this.dataService.addName('Intellisense new');
  }

  ngOnInit() {
    console.log('PortfolioHomeComponent.onInit()');
  }
  ngOnChanges() {
    console.log('PortfolioHomeComponent.onChanges()');
  }

  ngDoCheck() {
    console.log('PortfolioHomeComponent.ngDoCheck()');
  }

  printPipe(){
    console.log('LongText is ',this.longText);
  }
}
