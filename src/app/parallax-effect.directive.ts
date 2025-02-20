import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallaxEffect]',
  standalone: true
})
export class ParallaxEffectDirective {

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    this.el.nativeElement.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  }

}
