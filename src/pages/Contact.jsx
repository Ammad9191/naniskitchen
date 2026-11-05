import { useState } from 'react';
import Seo from '../components/Seo';
import WhatsAppButton from '../components/WhatsAppButton';
import { business } from '../config/business';
import { validateContact } from '../utils/validation';
import { buildContactMessage, openWhatsApp } from '../utils/whatsapp';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const submit = (event) => {
    event.preventDefault();
    const nextErrors = validateContact(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus('');
      return;
    }
    openWhatsApp(buildContactMessage(form));
    setStatus('WhatsApp should open with your message. Please tap send so we can reply. There is no website inbox yet — WhatsApp is the supported contact method.');
  };

  return (
    <div className="container-site grid gap-10 py-12 lg:grid-cols-2">
      <Seo title="Contact Us" description="Contact Nani’s Kitchen on WhatsApp for homemade food orders in Lahore." />
      <div>
        <p className="badge">Lahore, Pakistan</p>
        <h1 className="mt-4 font-display text-4xl text-brown-dark">Let’s talk over WhatsApp</h1>
        <p className="mt-4 leading-7 text-brown-muted">
          {business.name} currently takes questions and orders on WhatsApp. This form does not send email; it prepares a message for {business.phoneDisplay}.
        </p>
        <dl className="mt-8 space-y-4 text-sm">
          <div>
            <dt className="font-semibold text-brown-dark">WhatsApp</dt>
            <dd>{business.phoneDisplay}</dd>
          </div>
          <div>
            <dt className="font-semibold text-brown-dark">Service area</dt>
            <dd>{business.serviceArea}</dd>
          </div>
          <div>
            <dt className="font-semibold text-brown-dark">Hours</dt>
            {business.openingHours.days.map((day) => (
              <dd key={day.label}>
                {day.label}: {day.hours}
              </dd>
            ))}
            <dd className="mt-2 text-brown-muted">{business.openingHours.note}</dd>
          </div>
        </dl>
        <WhatsAppButton className="btn-primary mt-8" />
      </div>
      <form onSubmit={submit} className="card p-6 sm:p-8" noValidate>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold">Name</span>
          <input className="input" value={form.name} onChange={update('name')} aria-invalid={Boolean(errors.name)} />
          {errors.name ? <span className="mt-1 block text-sm text-red-800">{errors.name}</span> : null}
        </label>
        <label className="mt-4 block">
          <span className="mb-2 block text-sm font-semibold">Phone</span>
          <input className="input" value={form.phone} onChange={update('phone')} inputMode="tel" aria-invalid={Boolean(errors.phone)} />
          {errors.phone ? <span className="mt-1 block text-sm text-red-800">{errors.phone}</span> : null}
        </label>
        <label className="mt-4 block">
          <span className="mb-2 block text-sm font-semibold">Message</span>
          <textarea className="input min-h-32" value={form.message} onChange={update('message')} aria-invalid={Boolean(errors.message)} />
          {errors.message ? <span className="mt-1 block text-sm text-red-800">{errors.message}</span> : null}
        </label>
        {status ? <p className="mt-4 text-sm text-leaf-dark">{status}</p> : null}
        <button type="submit" className="btn-primary mt-6 w-full">
          Send on WhatsApp
        </button>
      </form>
    </div>
  );
}
