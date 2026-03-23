import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  words = ['Refurbished', 'Certified', 'Affordable', 'Reliable'];
  currentWord = 0;
  displayWord = 'Refurbished';
  private interval: any;

  floatingCards = [
    { icon: 'fa-laptop', label: 'Dell XPS 13', sub: 'Core i5 · 8GB · 256GB SSD', badge: '₹28,999', badgeClass: 'green', delay: '0s' },
    { icon: 'fa-desktop', label: 'HP EliteDesk', sub: 'Core i7 · 16GB · 512GB SSD', badge: 'CERTIFIED', badgeClass: 'blue', delay: '0.4s' },
    { icon: 'fa-screwdriver-wrench', label: 'Repair Service', sub: 'Same Day Turnaround', badge: 'QUICK FIX', badgeClass: 'coral', delay: '0.8s' },
  ];

  ngOnInit() {
    this.interval = setInterval(() => {
      this.currentWord = (this.currentWord + 1) % this.words.length;
      this.displayWord = this.words[this.currentWord];
    }, 2500);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
