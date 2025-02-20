import { Component } from '@angular/core';
import { ParallaxBannerComponent } from "../parallax-banner/parallax-banner.component";
import { PageBannerComponent } from "../page-banner/page-banner.component";
import { SquareComponent } from "../square/square.component";

@Component({
  selector: 'app-working-method',
  standalone: true,
  imports: [ParallaxBannerComponent, PageBannerComponent, SquareComponent],
  templateUrl: './working-method.component.html',
  styleUrl: './working-method.component.css'
})
export class WorkingMethodComponent {

}
