import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-regular-square',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './regular-square.component.html',
  styleUrl: './regular-square.component.css'
})
export class RegularSquareComponent {
  @Input() title: string = '';
  @Input() borderColor: string = 'blue';
  @Input() borderThickness: string = '5px';
}
