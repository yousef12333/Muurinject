import { Component } from '@angular/core';
import { SquareComponent } from "../square/square.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SquareComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
