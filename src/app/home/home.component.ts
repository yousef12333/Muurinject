import { Component } from '@angular/core';
import { ParallaxBannerComponent } from "../parallax-banner/parallax-banner.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ParallaxBannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
