import { ParallaxEffectDirective } from './parallax-effect.directive';

import { ElementRef } from '@angular/core';

describe('ParallaxEffectDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(document.createElement('div'));
    const directive = new ParallaxEffectDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});