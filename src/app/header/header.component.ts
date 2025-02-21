import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChild('firstOption', { static: false }) firstOption!: ElementRef;
  selectedService: string = ''; 

  constructor(private router: Router) {}

  navigate(event: any): void {
    const value = event.target.value;
    if (value) {
      this.router.navigate([`/${value}`]);
      this.resetFirstOptionText(); 
    }
  }

  regularNavigate(event: any): void {
    const value = event.target.getAttribute('data-value'); 

    if (value) {
      this.router.navigate([`/${value}`]);
      this.resetFirstOptionText(); 
    } else {
      this.router.navigate(['']);
      this.resetFirstOptionText();
    }
  }

  resetFirstOptionText(): void {

    setTimeout(() => {
      this.firstOption.nativeElement.innerHTML = 'Diensten&nbsp;&nbsp;&nbsp;▾'; 
      this.selectedService = ''; 
    });
  }
}
