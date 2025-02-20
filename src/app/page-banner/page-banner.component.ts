import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-banner.component.html',
  styleUrl: './page-banner.component.css'
})
export class PageBannerComponent {
  @Input() title!: string;
  @Input() imageUrl!: string;
}
