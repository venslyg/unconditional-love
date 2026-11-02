'use client';

import React, { useState } from 'react';
import { EVENT_DATA } from '@/data/event';
import { RegistrationFormData } from '@/types/registration';
import {
  Ticket,
  AlertCircle,
  ShieldCheck,
  User,
  Mail,
  Phone,
  Church,
  Info,
  Lock,
} from 'lucide-react';
import Link from 'next/link';

export function RegistrationPreviewForm() {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    phone: '',
    churchOrGroup: '',
    quantity: 1,
    agreeToTerms: false,
    agreeToPhotoConsent: false,
  });

  const unitPrice = EVENT_DATA.fee.amount;
  const totalPrice = formData.quantity * unitPrice;
  const formattedTotal = `Rs. ${totalPrice.toLocaleString('en-LK')}`;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (name === 'quantity') {
      setFormData((prev) => ({ ...prev, quantity: Math.max(1, parseInt(value, 10) || 1) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="w-full space-y-8">
      {/* 1. Honest Demo Status Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-coral/10 border border-coral/25 text-coral-deep art-paper-shadow space-y-2">
        <div className="flex items-center gap-2 font-display font-bold text-sm sm:text-base">
          <AlertCircle className="w-5 h-5 text-coral flex-shrink-0" aria-hidden="true" />
          <span>Interactive Preview Only — Bookings Not Yet Active</span>
        </div>
        <p className="text-xs sm:text-sm text-ink-muted leading-relaxed pl-7">
          This registration form is an architectural preview for the upcoming launch. <strong>No real participant data is stored, transmitted, or logged</strong>, and no payments are accepted in this preview phase.
        </p>
      </div>

      {/* 2. Interactive Preview Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="art-card p-6 sm:p-10 art-paper-shadow space-y-8"
        aria-label="Registration Preview Form"
      >
        <div className="flex items-center justify-between border-b border-violet/10 pb-4">
          <div>
            <h2 className="font-display text-xl font-bold text-ink">
              Participant Information
            </h2>
            <p className="text-xs text-ink-muted mt-0.5">
              Enter details for admission verification on January 20, 2027.
            </p>
          </div>
          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-paper-warm text-violet-deep border border-violet/15">
            Step 1 of 2
          </span>
        </div>

        {/* Input Fields Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          
          {/* Full Name */}
          <div className="space-y-1.5 sm:col-span-2">
            <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-ink">
              Full Name <span className="text-coral">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-ink-subtle">
                <User className="w-4 h-4" aria-hidden="true" />
              </div>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Joshua Fernando"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-canvas border border-violet/15 text-sm text-ink placeholder:text-ink-subtle/70 focus:outline-none focus:ring-2 focus:ring-violet-deep focus:border-transparent transition-all"
                required
              />
            </div>
            <p className="text-[11px] text-ink-muted">Name that will appear on your verified digital QR admission ticket.</p>
          </div>

          {/* Email Address */}
          <div className="space-y-1.5">
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-ink">
              Email Address <span className="text-coral">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-ink-subtle">
                <Mail className="w-4 h-4" aria-hidden="true" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="joshua@example.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-canvas border border-violet/15 text-sm text-ink placeholder:text-ink-subtle/70 focus:outline-none focus:ring-2 focus:ring-violet-deep focus:border-transparent transition-all"
                required
              />
            </div>
            <p className="text-[11px] text-ink-muted">Ticket QR code and confirmation receipt will be delivered here.</p>
          </div>

          {/* Mobile Phone */}
          <div className="space-y-1.5">
            <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-ink">
              Mobile Number (Sri Lanka) <span className="text-coral">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-ink-subtle">
                <Phone className="w-4 h-4" aria-hidden="true" />
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="077 123 4567"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-canvas border border-violet/15 text-sm text-ink placeholder:text-ink-subtle/70 focus:outline-none focus:ring-2 focus:ring-violet-deep focus:border-transparent transition-all"
                required
              />
            </div>
            <p className="text-[11px] text-ink-muted">Used for check-in verification and SMS / WhatsApp updates if opted-in.</p>
          </div>

          {/* Fellowship / Church Group (Optional) */}
          <div className="space-y-1.5 sm:col-span-2">
            <label htmlFor="churchOrGroup" className="block text-xs font-bold uppercase tracking-wider text-ink">
              Church Fellowship / Youth Group <span className="text-ink-subtle font-normal">(Optional)</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-ink-subtle">
                <Church className="w-4 h-4" aria-hidden="true" />
              </div>
              <input
                type="text"
                id="churchOrGroup"
                name="churchOrGroup"
                value={formData.churchOrGroup}
                onChange={handleChange}
                placeholder="e.g. St. Sebastian Youth / Colombo Fellowship"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-canvas border border-violet/15 text-sm text-ink placeholder:text-ink-subtle/70 focus:outline-none focus:ring-2 focus:ring-violet-deep focus:border-transparent transition-all"
              />
            </div>
          </div>

        </div>

        {/* 3. Ticket Quantity & Fee Calculation */}
        <div className="p-5 sm:p-6 rounded-2xl bg-paper-warm/70 border border-violet/15 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-display font-bold text-base text-ink flex items-center gap-2">
                <Ticket className="w-4 h-4 text-violet-deep" aria-hidden="true" />
                <span>Admission Fee Calculation</span>
              </h3>
              <p className="text-xs text-ink-muted">
                Fixed entrance fee of {EVENT_DATA.fee.formatted} per participant.
              </p>
            </div>

            {/* Quantity Selector Preview */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <label htmlFor="quantity" className="text-xs font-semibold text-ink">
                Passes:
              </label>
              <select
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="px-3 py-1.5 rounded-lg bg-canvas border border-violet/20 text-xs font-bold text-ink focus:outline-none focus:ring-2 focus:ring-violet-deep"
              >
                <option value={1}>1 Attendee (Standard)</option>
                <option value={2}>2 Attendees</option>
                <option value={3}>3 Attendees</option>
                <option value={4}>4 Attendees</option>
                <option value={5}>5 Attendees</option>
              </select>
            </div>
          </div>

          {/* Breakdown Table */}
          <div className="pt-3 border-t border-violet/10 flex items-center justify-between text-xs sm:text-sm">
            <span className="text-ink-muted">
              {formData.quantity} × {EVENT_DATA.fee.formatted}
            </span>
            <span className="font-display font-bold text-lg text-ink">
              Total: {formattedTotal}
            </span>
          </div>

          <p className="text-[11px] text-ink-subtle leading-relaxed">
            ℹ️ <strong>Note on Group Bookings:</strong> The baseline MVP supports single individual registrations. The quantity selector above is shown for budgeting preview; multi-attendee checkout will be enabled if confirmed by the organizing committee.
          </p>
        </div>

        {/* 4. Terms & Policy Agreements */}
        <div className="space-y-3 pt-2">
          <label className="flex items-start gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="mt-1 w-4 h-4 rounded border-violet/30 text-violet-deep focus:ring-violet-deep"
            />
            <span className="text-xs text-ink-muted leading-relaxed">
              I agree to the gathering guidelines and understand that my digital QR ticket must be presented at Avenra Gangaara on {EVENT_DATA.dateDisplay} for admission. View draft{' '}
              <Link href="/terms" className="text-violet-deep underline font-medium" target="_blank">
                Terms of Participation
              </Link>.
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              name="agreeToPhotoConsent"
              checked={formData.agreeToPhotoConsent}
              onChange={handleChange}
              className="mt-1 w-4 h-4 rounded border-violet/30 text-violet-deep focus:ring-violet-deep"
            />
            <span className="text-xs text-ink-muted leading-relaxed">
              I consent to gathering photography and video recording used strictly for church fellowship and community highlights in accordance with our{' '}
              <Link href="/privacy" className="text-violet-deep underline font-medium" target="_blank">
                Draft Privacy Notice
              </Link>.
            </span>
          </label>
        </div>

        {/* 5. Disabled Submit Action */}
        <div className="pt-4 border-t border-violet/10 space-y-3 text-center">
          <button
            type="button"
            disabled={true}
            className="w-full py-3.5 px-6 rounded-full bg-ink/15 text-ink-subtle font-display font-bold text-sm sm:text-base border border-ink/10 cursor-not-allowed select-none flex items-center justify-center gap-2"
            aria-disabled="true"
          >
            <Lock className="w-4 h-4 text-ink-subtle" aria-hidden="true" />
            <span>Registration Opening Soon — Checkout Disabled</span>
          </button>

          <p className="text-[11px] text-ink-subtle">
            Secure card payments (LKR) will be enabled via an approved Sri Lankan hosted payment gateway once live booking is authorized by the organizing committee.
          </p>
        </div>

      </form>

      {/* 6. Security & Policy Information Box */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-ink-muted">
        <div className="p-4 rounded-xl bg-paper-light border border-violet/10 flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-leaf-deep flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <strong className="block text-ink font-semibold">Atomic Capacity</strong>
            <span>Guaranteed zero overselling. Maximum ~500 seats enforced on server.</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-paper-light border border-violet/10 flex items-start gap-2.5">
          <Lock className="w-4 h-4 text-violet-deep flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <strong className="block text-ink font-semibold">Hosted Checkout</strong>
            <span>Card details are never handled or stored on our servers.</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-paper-light border border-violet/10 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <strong className="block text-ink font-semibold">Digital Admission</strong>
            <span>Cryptographic single-use QR ticket delivered to email.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

