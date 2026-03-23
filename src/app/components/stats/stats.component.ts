import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements AfterViewInit {
  stats = [
    { value: 5000,  suffix: '+', label: 'Devices Sold',       icon: 'fa-laptop',            color: 'teal' },
    { value: 98,    suffix: '%', label: 'Customer Satisfaction', icon: 'fa-face-smile',       color: 'blue' },
    { value: 500,   suffix: '+', label: 'Repair Jobs Done',    icon: 'fa-screwdriver-wrench', color: 'coral' },
    { value: 6,     suffix: '+', label: 'Years of Expertise',  icon: 'fa-calendar-check',    color: 'green' },
  ];

  displayValues: number[] = [0, 0, 0, 0];

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        this.animateStats();
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    observer.observe(this.el.nativeElement);
  }

  animateStats() {
    this.stats.forEach((stat, i) => {
      const duration = 2000;
      const step = stat.value / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current = Math.min(current + step, stat.value);
        this.displayValues[i] = Math.floor(current);
        if (current >= stat.value) clearInterval(timer);
      }, 16);
    });
  }
}
