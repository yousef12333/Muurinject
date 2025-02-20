import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-parallax-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parallax-banner.component.html',
  styleUrl: './parallax-banner.component.css'
})
export class ParallaxBannerComponent {
  @Input() imageUrl!: string;
}
