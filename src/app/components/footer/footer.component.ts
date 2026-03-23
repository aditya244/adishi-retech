import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  year = new Date().getFullYear();

  quickLinks = [
    { label: 'Refurbished Laptops', href: '#products' },
    { label: 'Refurbished Desktops', href: '#products' },
    { label: 'Spare Parts', href: '#products' },
    { label: 'Repair Services', href: '#services' },
    { label: 'Trade-In Program', href: '#services' },
    { label: 'AMC Plans', href: '#services' },
  ];

  supportLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Warranty Policy', href: '#' },
    { label: 'Return Policy', href: '#' },
    { label: 'Track Your Order', href: '#' },
    { label: 'FAQs', href: '#' },
    { label: 'Contact Us', href: '#contact' },
  ];

  socials = [
    { icon: 'fa-brands fa-facebook-f',  href: '#', label: 'Facebook' },
    { icon: 'fa-brands fa-instagram',   href: '#', label: 'Instagram' },
    { icon: 'fa-brands fa-linkedin-in', href: '#', label: 'LinkedIn' },
    { icon: 'fa-brands fa-whatsapp',    href: '#', label: 'WhatsApp' },
  ];
}
