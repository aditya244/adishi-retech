# Adishi Retech Solutions — Landing Page

Angular 14 landing page for Adishi Retech Solutions Pvt. Ltd., built with the MEAN stack frontend.
Uses NgModule-based architecture (no standalone components).

---

## Prerequisites

Make sure you have the following installed:

| Tool | Version | Install |
|------|---------|---------|
| Node.js | 16.x or 18.x | https://nodejs.org |
| npm | 8.x+ | Comes with Node |
| Angular CLI | 14.x | `npm install -g @angular/cli@14` |

Check your versions:
```bash
node -v
npm -v
ng version
```

---

## Getting Started

### 1. Clone / Extract the project

```bash
# If using the ZIP
unzip adishi-angular-source.zip
cd adishi-landing
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
# or
ng serve
```

Open your browser at: **http://localhost:4200**

The app will automatically reload on any file changes.

---

## Build for Production

```bash
npm run build:prod
# Output goes to: dist/adishi-retech-landing/
```

---

## Project Structure

```
adishi-landing/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/           # Sticky navbar with mobile menu
│   │   │   ├── hero/             # Full-viewport hero with animated text
│   │   │   ├── brands-banner/    # Infinite scroll brand marquee
│   │   │   ├── stats/            # Animated counter stats
│   │   │   ├── features/         # Why Choose Us grid
│   │   │   ├── products/         # Filterable product cards
│   │   │   ├── services/         # Dark-themed services grid
│   │   │   ├── how-it-works/     # 4-step process section
│   │   │   ├── testimonials/     # Auto-rotating testimonial slider
│   │   │   ├── cta-banner/       # Contact form + Call/WhatsApp CTAs
│   │   │   └── footer/           # 4-column footer
│   │   ├── app.component.ts      # Root component
│   │   └── app.module.ts         # NgModule declaration (no standalone)
│   ├── environments/
│   │   ├── environment.ts        # Development config (apiUrl, etc.)
│   │   └── environment.prod.ts   # Production config
│   ├── styles.css                # Global CSS variables & utilities
│   ├── index.html                # Root HTML with Google Fonts
│   ├── main.ts                   # Bootstrap entry point
│   └── polyfills.ts              # Zone.js polyfills
├── angular.json                  # Angular CLI workspace config
├── package.json                  # npm dependencies
├── tsconfig.json                 # TypeScript base config
├── tsconfig.app.json             # App TypeScript config
├── tsconfig.spec.json            # Test TypeScript config
└── karma.conf.js                 # Karma test runner
```

---

## Connecting to your Node/Express Backend

The `environment.ts` files expose `apiUrl` for your MEAN stack API:

```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'   // ← your Express server
};
```

### Example: Loading products from MongoDB via Express

Create a product service:

```bash
ng generate service app/services/product
```

```typescript
// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/products`);
  }
}
```

Then inject it into `ProductsComponent` and replace the hardcoded `allProducts` array with an `ngOnInit()` call.

---

## Fonts & Icons

- **Syne** (headings) + **DM Sans** (body) — loaded via Google Fonts CDN in `index.html`
- **Font Awesome 6** — loaded via Cloudflare CDN in `index.html`

No additional npm packages needed for fonts/icons.

---

## Brand Colors (from Logo)

| Token | Value | Usage |
|-------|-------|-------|
| `--navy` | `#0d1b3e` | Primary dark, navbar, headings |
| `--teal` | `#1a8c6f` | Primary accent, CTAs |
| `--teal-light` | `#27ae8f` | Hover states, highlights |
| `--sky` | `#3a7dc9` | Secondary accent, gradients |
| `--coral` | `#e05252` | Alerts, badges, CTA buttons |
| `--green` | `#4caf50` | Success states, price badges |

---

## Future E-Commerce Integration Checklist

- [ ] Replace hardcoded products with `ProductService` → Express API → MongoDB
- [ ] Add `CartService` with RxJS `BehaviorSubject` for cart state
- [ ] Add Angular routing (`/products`, `/product/:id`, `/cart`, `/checkout`)
- [ ] Integrate Razorpay or PayU for payments
- [ ] Add `AuthService` with JWT for user accounts
- [ ] Add `OrderService` for order tracking
- [ ] Implement lazy loading for product listing and checkout routes

---

## License

Private — Adishi Retech Solutions Pvt. Ltd.
