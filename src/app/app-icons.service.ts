import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

/**
 * @title SVG icons
 */
@Injectable()
export class AppIconsService {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'add',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/add.svg'));
    iconRegistry.addSvgIcon(
      'place',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/place.svg'));
    iconRegistry.addSvgIcon(
      'search',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/search.svg'));
    iconRegistry.addSvgIcon(
      'suspect',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/suspect.svg'));
    iconRegistry.addSvgIcon(
      'weapon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/weapon.svg'));
  }
}
