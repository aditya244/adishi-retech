import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  activeFilter = 'all';

  filters = [
    { key: 'all',      label: 'All Products' },
    { key: 'laptop',   label: 'Laptops' },
    { key: 'desktop',  label: 'Desktops' },
    { key: 'parts',    label: 'Parts & Accessories' },
  ];

  allProducts = [
    {
      id: 1, category: 'laptop',
      name: 'Dell Latitude 5490',
      specs: 'Intel Core i5-8250U · 8GB RAM · 256GB SSD · 14"',
      price: 24999, originalPrice: 45000,
      condition: 'Excellent', conditionClass: 'excellent',
      badge: 'Best Seller', badgeClass: 'gold',
      rating: 4.8, reviews: 126,
      icon: 'fa-laptop'
    },
    {
      id: 2, category: 'laptop',
      name: 'HP EliteBook 840 G5',
      specs: 'Intel Core i7-8550U · 16GB RAM · 512GB SSD · 14"',
      price: 34999, originalPrice: 68000,
      condition: 'Good', conditionClass: 'good',
      badge: 'Premium', badgeClass: 'blue',
      rating: 4.7, reviews: 89,
      icon: 'fa-laptop'
    },
    {
      id: 3, category: 'laptop',
      name: 'Lenovo ThinkPad T480',
      specs: 'Intel Core i5-8350U · 8GB RAM · 256GB SSD · 14"',
      price: 22999, originalPrice: 42000,
      condition: 'Excellent', conditionClass: 'excellent',
      badge: 'New Arrival', badgeClass: 'teal',
      rating: 4.9, reviews: 54,
      icon: 'fa-laptop'
    },
    {
      id: 4, category: 'desktop',
      name: 'HP EliteDesk 800 G3',
      specs: 'Intel Core i7-7700 · 16GB RAM · 1TB HDD + 256GB SSD',
      price: 28999, originalPrice: 55000,
      condition: 'Excellent', conditionClass: 'excellent',
      badge: 'Popular', badgeClass: 'teal',
      rating: 4.6, reviews: 72,
      icon: 'fa-desktop'
    },
    {
      id: 5, category: 'desktop',
      name: 'Dell OptiPlex 7050',
      specs: 'Intel Core i5-7500 · 8GB RAM · 500GB HDD',
      price: 18999, originalPrice: 36000,
      condition: 'Good', conditionClass: 'good',
      badge: 'Value Pick', badgeClass: 'green',
      rating: 4.5, reviews: 41,
      icon: 'fa-desktop'
    },
    {
      id: 6, category: 'parts',
      name: 'Laptop RAM DDR4 8GB',
      specs: '2666MHz · Compatible with Dell, HP, Lenovo · Warranty',
      price: 1999, originalPrice: 4500,
      condition: 'New', conditionClass: 'excellent',
      badge: 'In Stock', badgeClass: 'green',
      rating: 4.9, reviews: 203,
      icon: 'fa-memory'
    },
  ];

  get filteredProducts() {
    if (this.activeFilter === 'all') return this.allProducts;
    return this.allProducts.filter(p => p.category === this.activeFilter);
  }

  setFilter(key: string) {
    this.activeFilter = key;
  }

  getDiscount(price: number, original: number): number {
    return Math.round((1 - price / original) * 100);
  }

  getStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }
}
