import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isMobileOpen = false;

  navLinks = [
    { label: 'Products', href: '#products', icon: 'fa-laptop' },
    { label: 'Services', href: '#services', icon: 'fa-screwdriver-wrench' },
    { label: 'How It Works', href: '#how-it-works', icon: 'fa-circle-nodes' },
    { label: 'Why Us', href: '#features', icon: 'fa-shield-check' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 40;
  }

  ngOnInit() {}

  toggleMobile() {
    this.isMobileOpen = !this.isMobileOpen;
  }

  closeMobile() {
    this.isMobileOpen = false;
  }
}
