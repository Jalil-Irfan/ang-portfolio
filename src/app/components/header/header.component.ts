import { Component } from '@angular/core';
import { AnchorComponent } from '../anchor/anchor.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AnchorComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}
