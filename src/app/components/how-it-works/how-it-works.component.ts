import { Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent {
  steps = [
    {
      step: '01',
      icon: 'fa-magnifying-glass',
      title: 'Browse & Select',
      desc: 'Explore our curated inventory of refurbished laptops, desktops, and IT equipment. Filter by brand, specs, and price.',
      color: 'teal'
    },
    {
      step: '02',
      icon: 'fa-clipboard-check',
      title: 'Quality Verified',
      desc: 'Every device undergoes our 50-point inspection. Battery, display, keyboard, ports, performance — all checked and certified.',
      color: 'blue'
    },
    {
      step: '03',
      icon: 'fa-indian-rupee-sign',
      title: 'Pay Securely',
      desc: 'Multiple payment options — UPI, cards, net banking, and No-Cost EMI. Safe and encrypted transactions every time.',
      color: 'coral'
    },
    {
      step: '04',
      icon: 'fa-truck-fast',
      title: 'Delivered to You',
      desc: 'Doorstep delivery with secure packaging. Free delivery within Bengaluru. Pan-Karnataka shipping available.',
      color: 'green'
    },
  ];
}
