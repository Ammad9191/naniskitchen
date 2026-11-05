import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { business } from '../config/business';
import { useCart } from '../context/CartContext';
import { validateCheckout } from '../utils/validation';
import { buildOrderMessage, openWhatsApp } from '../utils/whatsapp';
import OrderSummary from './OrderSummary';

export default function CheckoutForm() {
  const navigate = useNavigate();
  const { items, subtotal, deliveryFee, total, customer, setCustomer } = useCart();
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const updateField = (field) => (event) => {
    setCustomer((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined, items: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (submitting) return;

    const nextErrors = validateCheckout({ ...customer, items });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus('');
      return;
    }

    setSubmitting(true);
    const message = buildOrderMessage({
      customer,
      items,
      subtotal,
      deliveryFee,
      total,
    });
    openWhatsApp(message);
    sessionStorage.setItem('nanis-last-order-message', message);
    setStatus('WhatsApp should open with your order ready to send. Please tap send so we can confirm it.');
    setSubmitting(false);
    navigate('/order-instructions');
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]" noValidate>
      <div className="card p-6 sm:p-8">
        <h1 className="font-display text-3xl text-brown-dark">Checkout</h1>
        <p className="mt-2 text-sm text-brown-muted">
          Opening WhatsApp prepares your message. The order is confirmed only after you send it and we reply.
        </p>
        <div className="mt-6 grid gap-4">
          <Field label="Full name" error={errors.name}>
            <input className="input" value={customer.name} onChange={updateField('name')} autoComplete="name" aria-invalid={Boolean(errors.name)} />
          </Field>
          <Field label="WhatsApp / phone number" error={errors.phone}>
            <input className="input" value={customer.phone} onChange={updateField('phone')} autoComplete="tel" inputMode="tel" aria-invalid={Boolean(errors.phone)} />
          </Field>
          <Field label="Delivery address" error={errors.address}>
            <textarea className="input min-h-24" value={customer.address} onChange={updateField('address')} aria-invalid={Boolean(errors.address)} />
          </Field>
          <Field label="Lahore area or neighborhood" error={errors.area}>
            <input className="input" value={customer.area} onChange={updateField('area')} aria-invalid={Boolean(errors.area)} />
          </Field>
          <Field label="Delivery preference">
            <select className="input" value={customer.deliveryPreference} onChange={updateField('deliveryPreference')}>
              {business.deliveryWindows.map((window) => (
                <option key={window}>{window}</option>
              ))}
            </select>
          </Field>
          <Field label="Payment preference">
            <select className="input" value={customer.paymentPreference} onChange={updateField('paymentPreference')}>
              {business.payments.map((method) => (
                <option key={method.id} value={method.label}>
                  {method.label}
                </option>
              ))}
            </select>
          </Field>
          <p className="text-xs text-brown-muted">Payment preference is noted with the order and is subject to confirmation.</p>
          <Field label="Delivery instructions (optional)">
            <textarea className="input min-h-20" value={customer.instructions} onChange={updateField('instructions')} />
          </Field>
        </div>
        {errors.items ? <p className="mt-4 text-sm text-red-800">{errors.items}</p> : null}
        {status ? <p className="mt-4 text-sm text-leaf-dark">{status}</p> : null}
        <button type="submit" className="btn-primary mt-6 w-full" disabled={submitting}>
          Place Order on WhatsApp
        </button>
      </div>
      <OrderSummary items={items} subtotal={subtotal} deliveryFee={deliveryFee} total={total} />
    </form>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-brown-dark">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-sm text-red-800">{error}</span> : null}
    </label>
  );
}
