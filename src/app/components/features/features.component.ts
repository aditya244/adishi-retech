import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  features = [
    {
      icon: 'fa-shield-halved',
      title: '50-Point Quality Check',
      desc: 'Every device goes through our rigorous 50-point inspection — battery health, display, keyboard, ports, performance, and more.',
      color: 'teal'
    },
    {
      icon: 'fa-rotate-left',
      title: '15-Day Easy Returns',
      desc: 'Not satisfied? Return within 15 days, no questions asked. We\'re confident in our quality, and you should be too.',
      color: 'blue'
    },
    {
      icon: 'fa-certificate',
      title: '6-Month Warranty',
      desc: 'All refurbished devices come with a comprehensive 6-month warranty. Post-warranty repair support is always available.',
      color: 'green'
    },
    {
      icon: 'fa-indian-rupee-sign',
      title: 'No-Cost EMI',
      desc: 'Split your purchase into easy EMI options. UPI and card discounts available. Making premium tech accessible.',
      color: 'coral'
    },
    {
      icon: 'fa-truck-fast',
      title: 'Fast Delivery',
      desc: 'Doorstep delivery across Bengaluru and shipping across Karnataka. Secure packaging ensures your device arrives safely.',
      color: 'teal'
    },
    {
      icon: 'fa-headset',
      title: 'Expert Support',
      desc: 'Our tech team is available to help you choose the right device, configure software, or troubleshoot any issues.',
      color: 'blue'
    },
  ];
}
