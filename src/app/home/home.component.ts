import { Component } from '@angular/core';
import { ParallaxBannerComponent } from "../parallax-banner/parallax-banner.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ParallaxBannerComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
