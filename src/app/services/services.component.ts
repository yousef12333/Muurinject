import { Component, OnInit, OnDestroy, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { register } from 'swiper/element/bundle';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ServicesComponent implements OnInit, AfterViewInit, OnDestroy {
  private autoSlideInterval: any;

  constructor() { }

  ngOnInit(): void {
    register(); 
  }

  ngAfterViewInit(): void {
    const swiper: any = document.querySelector('swiper-container');

    if (swiper && swiper.swiper) {
      this.startAutoSlide(swiper);
    }
  }

  private startAutoSlide(swiper: any): void {
    this.clearAutoSlide(); 

    this.autoSlideInterval = setInterval(() => {
      swiper.swiper.slideNext();
    }, 10000);
  }

  private clearAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }

  ngOnDestroy(): void {
    this.clearAutoSlide();
  }
}
