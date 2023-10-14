import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-anchor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.css']
})
export class AnchorComponent {
  @Input() hrefVal!: string;
  @Input() textVal!: string;
  @Input() targetBlank: boolean = false;
  
  onInit() {
    console.log('AnchorComponent.onInit()');
  }
}
