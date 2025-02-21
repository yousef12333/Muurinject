import { Component } from '@angular/core';
import { SquareComponent } from "../square/square.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SquareComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private router: Router) {}

  regularNavigate(event: any): void {
    const value = event.target.getAttribute('data-value'); 

    if (value) {
      this.router.navigate([`/${value}`]);
    } else {
      this.router.navigate(['']);
    }
  }
}
