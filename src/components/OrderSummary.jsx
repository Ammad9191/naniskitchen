import { business } from '../config/business';
import { formatPKR } from '../utils/currency';

export default function OrderSummary({ items, subtotal, deliveryFee, total }) {
  return (
    <aside className="card p-6">
      <h2 className="font-display text-2xl text-brown-dark">Order summary</h2>
      <ul className="mt-4 space-y-3 text-sm">
        {items.map((item) => (
          <li key={item.id} className="flex justify-between gap-4">
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>{formatPKR(item.lineTotal)}</span>
          </li>
        ))}
      </ul>
      <dl className="mt-6 space-y-2 border-t border-brown-dark/10 pt-4 text-sm">
        <div className="flex justify-between">
          <dt>Subtotal</dt>
          <dd>{formatPKR(subtotal)}</dd>
        </div>
        <div className="flex justify-between">
          <dt>Delivery</dt>
          <dd>{deliveryFee === 0 ? business.delivery.label : formatPKR(deliveryFee)}</dd>
        </div>
        <div className="flex justify-between font-display text-xl text-brown-dark">
          <dt>Total</dt>
          <dd>{formatPKR(total)}</dd>
        </div>
      </dl>
      <p className="mt-4 text-xs leading-5 text-brown-muted">{business.sampleMenuNotice}</p>
    </aside>
  );
}
