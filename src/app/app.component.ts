import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-brands-banner></app-brands-banner>
      <app-stats></app-stats>
      <app-features></app-features>
      <!-- <app-products></app-products> -->
      <app-services></app-services>
      <app-how-it-works></app-how-it-works>
      <app-testimonials></app-testimonials>
      <app-cta-banner></app-cta-banner>
    </main>
    <app-footer></app-footer>
  `
})
export class AppComponent {}
