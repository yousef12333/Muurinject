import { Component } from '@angular/core';
import { SquareComponent } from "../square/square.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SquareComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
