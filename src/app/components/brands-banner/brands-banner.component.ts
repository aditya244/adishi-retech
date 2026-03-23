import { Component } from '@angular/core';

@Component({
  selector: 'app-brands-banner',
  templateUrl: './brands-banner.component.html',
  styleUrls: ['./brands-banner.component.css']
})
export class BrandsBannerComponent {
  brands = [
    { name: 'Dell', icon: 'fa-brands fa-dell' },
    { name: 'HP', letter: 'HP' },
    { name: 'Lenovo', letter: 'Lv' },
    { name: 'Apple', icon: 'fa-brands fa-apple' },
    { name: 'Acer', letter: 'Ac' },
    { name: 'Asus', letter: 'As' },
    { name: 'Microsoft', icon: 'fa-brands fa-microsoft' },
    { name: 'Samsung', letter: 'Sa' },
  ];
}
