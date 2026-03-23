import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      icon: 'fa-screwdriver-wrench',
      title: 'Laptop & Desktop Repair',
      desc: 'Hardware faults, screen replacements, keyboard repairs, motherboard diagnostics — we fix it all. Quick turnaround, fair pricing.',
      tags: ['Screen Repair', 'Keyboard', 'Motherboard', 'Charging Port'],
      color: 'teal',
      price: 'Starting ₹499'
    },
    {
      icon: 'fa-recycle',
      title: 'Device Refurbishment',
      desc: 'Full hardware and software refurbishment. Cleaning, part replacement, OS reinstall, driver updates — making old devices new again.',
      tags: ['Deep Clean', 'OS Install', 'Part Swap', 'Performance Boost'],
      color: 'blue',
      price: 'Starting ₹999'
    },
    {
      icon: 'fa-hard-drive',
      title: 'Data Recovery & Transfer',
      desc: 'Lost data from a crashed drive? Our specialists recover data from SSDs, HDDs, and USBs with industry-grade tools.',
      tags: ['HDD Recovery', 'SSD', 'USB Drives', 'Ransomware'],
      color: 'coral',
      price: 'Starting ₹799'
    },
    {
      icon: 'fa-wifi',
      title: 'Networking & Setup',
      desc: 'Office or home network setup, Wi-Fi configuration, router installation, and remote work infrastructure solutions.',
      tags: ['Wi-Fi Setup', 'Router Config', 'LAN/WAN', 'VPN'],
      color: 'green',
      price: 'Starting ₹699'
    },
    {
      icon: 'fa-shield-halved',
      title: 'Annual Maintenance Contract',
      desc: 'Keep your fleet running. AMC plans for businesses covering unlimited service calls, priority support, and quarterly checkups.',
      tags: ['Business Plans', 'Priority Support', 'Quarterly Check', 'Fleet'],
      color: 'teal',
      price: 'Custom Pricing'
    },
    {
      icon: 'fa-box-archive',
      title: 'Sell / Trade-In Your Device',
      desc: 'Get the best price for your old laptop or desktop. Instant evaluation, same-day payment. We pick up from your doorstep.',
      tags: ['Instant Quote', 'Same Day Pay', 'Doorstep Pickup', 'All Brands'],
      color: 'blue',
      price: 'Get Instant Quote'
    },
  ];
}
