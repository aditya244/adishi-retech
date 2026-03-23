import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  active = 0;

  testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Freelance Graphic Designer',
      location: 'Indiranagar, Bengaluru',
      text: 'Bought a refurbished Dell Latitude for my freelance work. Battery life is amazing and the screen is perfect. Saved almost ₹30,000 compared to buying new. Adishi team was super helpful in choosing the right spec for my workload.',
      rating: 5,
      avatar: 'PS',
      avatarColor: 'teal'
    },
    {
      name: 'Rahul Nair',
      role: 'IT Manager, StartupXYZ',
      location: 'Whitefield, Bengaluru',
      text: 'We onboarded 15 laptops for our new team through Adishi. Every machine was in excellent condition and setup time was minimal. Their AMC plan is perfect for our office. Highly recommend for businesses looking to scale cost-effectively.',
      rating: 5,
      avatar: 'RN',
      avatarColor: 'blue'
    },
    {
      name: 'Meghna Rao',
      role: 'College Student',
      location: 'Jayanagar, Bengaluru',
      text: 'Got my first laptop for college from Adishi at just ₹22,000. They helped me pick the right one for programming and it handles VS Code, Docker, everything. 6-month warranty gave me confidence. 10/10 experience!',
      rating: 5,
      avatar: 'MR',
      avatarColor: 'coral'
    },
    {
      name: 'Suresh Bhat',
      role: 'Small Business Owner',
      location: 'Rajajinagar, Bengaluru',
      text: 'My HP laptop died and I needed a quick replacement. Adishi had same-day repair and even helped me recover all my data. Quick, professional, and reasonably priced. They have become my go-to for all IT needs.',
      rating: 5,
      avatar: 'SB',
      avatarColor: 'green'
    },
  ];

  prev() {
    this.active = (this.active - 1 + this.testimonials.length) % this.testimonials.length;
  }

  next() {
    this.active = (this.active + 1) % this.testimonials.length;
  }

  setActive(i: number) { this.active = i; }

  getStars(n: number) { return Array(n).fill(0); }
}
