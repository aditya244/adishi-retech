import { Component } from '@angular/core';

@Component({
  selector: 'app-cta-banner',
  template: `
    <section class="cta-section" id="contact">
      <div class="cta-bg">
        <div class="cta-mesh"></div>
        <div class="cta-grid"></div>
      </div>
      <div class="container cta-inner">
        <div class="cta-content">
          <div class="section-tag light">
            <i class="fa-solid fa-phone-volume"></i>
            Get In Touch
          </div>
          <h2 class="cta-title">Ready to Find Your Perfect Device?</h2>
          <p class="cta-sub">Talk to our experts, get a device recommendation, or book a repair slot — we're just a call away.</p>
          <div class="cta-actions">
            <a href="tel:+919999999999" class="btn-coral cta-btn">
              <i class="fa-solid fa-phone"></i> Call Us Now
            </a>
            <a href="https://wa.me/919999999999" target="_blank" class="btn-wa">
              <i class="fa-brands fa-whatsapp"></i> WhatsApp Chat
            </a>
          </div>
          <p class="cta-availability">
            <i class="fa-solid fa-clock"></i>
            Mon – Sat · 9:00 AM – 7:00 PM · Doorstep service available
          </p>
        </div>

        <div class="cta-card">
          <h3>Quick Enquiry</h3>
          <div class="form-group">
            <label>Your Name</label>
            <input type="text" placeholder="Ravi Kumar" [(ngModel)]="form.name">
          </div>
          <div class="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="+91 98765 43210" [(ngModel)]="form.phone">
          </div>
          <div class="form-group">
            <label>What do you need?</label>
            <select [(ngModel)]="form.need">
              <option value="">Select a service</option>
              <option>Buy a Refurbished Device</option>
              <option>Laptop/Desktop Repair</option>
              <option>Trade-In / Sell My Device</option>
              <option>AMC for Business</option>
              <option>Something Else</option>
            </select>
          </div>
          <button class="btn-primary submit-btn" (click)="submit()">
            <i class="fa-solid fa-paper-plane"></i> Send Enquiry
          </button>
          <p *ngIf="submitted" class="success-msg">
            <i class="fa-solid fa-circle-check"></i> Thanks! We'll call you back shortly.
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .cta-section {
      padding: var(--section-gap) 0;
      background: var(--navy);
      position: relative;
      overflow: hidden;
    }
    .cta-bg { position: absolute; inset: 0; pointer-events: none; }
    .cta-mesh {
      position: absolute; top: -20%; right: -10%;
      width: 600px; height: 600px;
      background: radial-gradient(circle, rgba(26,140,111,0.2) 0%, transparent 65%);
      border-radius: 50%;
    }
    .cta-grid {
      position: absolute; inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
      background-size: 60px 60px;
    }
    .cta-inner {
      display: grid;
      grid-template-columns: 1fr 400px;
      gap: 80px;
      align-items: center;
      position: relative;
      z-index: 1;
    }
    .section-tag.light {
      background: rgba(255,255,255,0.08);
      border-color: rgba(255,255,255,0.15);
      color: rgba(255,255,255,0.85);
    }
    .cta-title {
      font-size: clamp(28px, 3.5vw, 44px);
      font-weight: 800;
      color: var(--white);
      margin-bottom: 16px;
      line-height: 1.1;
    }
    .cta-sub {
      font-size: 17px;
      color: rgba(255,255,255,0.65);
      line-height: 1.65;
      margin-bottom: 36px;
      max-width: 500px;
    }
    .cta-actions {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      margin-bottom: 24px;
    }
    .btn-wa {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: rgba(37,211,102,0.15);
      border: 1.5px solid rgba(37,211,102,0.35);
      color: #25d366;
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 15px;
      padding: 13px 24px;
      border-radius: 10px;
      transition: all 0.3s ease;
    }
    .btn-wa:hover { background: rgba(37,211,102,0.25); transform: translateY(-2px); }
    .cta-availability {
      font-size: 13px;
      color: rgba(255,255,255,0.45);
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .cta-availability i { color: var(--teal-light); }
    /* Form Card */
    .cta-card {
      background: var(--white);
      border-radius: 24px;
      padding: 36px;
      box-shadow: 0 24px 80px rgba(0,0,0,0.3);
    }
    .cta-card h3 {
      font-size: 20px;
      font-weight: 700;
      color: var(--navy);
      margin-bottom: 24px;
    }
    .form-group {
      margin-bottom: 16px;
    }
    .form-group label {
      display: block;
      font-size: 13px;
      font-weight: 600;
      color: var(--grey-800);
      margin-bottom: 6px;
    }
    .form-group input,
    .form-group select {
      width: 100%;
      padding: 12px 14px;
      border: 1.5px solid var(--grey-200);
      border-radius: 10px;
      font-family: var(--font-body);
      font-size: 14px;
      color: var(--grey-800);
      background: var(--off-white);
      transition: border-color 0.2s ease;
      outline: none;
      appearance: none;
    }
    .form-group input:focus,
    .form-group select:focus { border-color: var(--teal); background: var(--white); }
    .submit-btn {
      width: 100%;
      justify-content: center;
      padding: 14px;
      margin-top: 4px;
      font-size: 15px;
    }
    .success-msg {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--teal);
      font-weight: 600;
      font-size: 14px;
      margin-top: 12px;
    }
    .success-msg i { color: var(--green); }
    @media (max-width: 900px) {
      .cta-inner { grid-template-columns: 1fr; gap: 48px; }
    }
  `]
})
export class CtaBannerComponent {
  form = { name: '', phone: '', need: '' };
  submitted = false;

  submit() {
    if (this.form.name && this.form.phone) {
      this.submitted = true;
      setTimeout(() => { this.submitted = false; this.form = { name: '', phone: '', need: '' }; }, 4000);
    }
  }
}
