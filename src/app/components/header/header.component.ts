import { Component } from '@angular/core';
import { AnchorComponent } from '../anchor/anchor.component';
import { DataServiceService } from 'src/app/services/data-service/data-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AnchorComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  myName: string = '';

  constructor(private dataService: DataServiceService) { 
    this.dataService.addName('Intellisense');
    this.myName = this.dataService.getName();
  }
  ngOnInit() {
    console.log('Header .onInit()');
  }
  ngOnChanges() {
    console.log('Header onChanges()');
  }
}
