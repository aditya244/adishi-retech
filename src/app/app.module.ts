import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { StatsComponent } from './components/stats/stats.component';
import { FeaturesComponent } from './components/features/features.component';
import { ProductsComponent } from './components/products/products.component';
import { ServicesComponent } from './components/services/services.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CtaBannerComponent } from './components/cta-banner/cta-banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrandsBannerComponent } from './components/brands-banner/brands-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    StatsComponent,
    FeaturesComponent,
    ProductsComponent,
    ServicesComponent,
    HowItWorksComponent,
    TestimonialsComponent,
    CtaBannerComponent,
    FooterComponent,
    BrandsBannerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
