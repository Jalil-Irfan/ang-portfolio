import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
  selector: 'app-edu',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent {

}
