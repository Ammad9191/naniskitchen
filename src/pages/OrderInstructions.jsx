import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import WhatsAppButton from '../components/WhatsAppButton';
import { useCart } from '../context/CartContext';
import { buildOrderMessage } from '../utils/whatsapp';

export default function OrderInstructions() {
  const { items, customer, subtotal, deliveryFee, total } = useCart();
  const stored = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('nanis-last-order-message') : '';
  const message =
    stored ||
    (items.length
      ? buildOrderMessage({ customer, items, subtotal, deliveryFee, total })
      : 'Hello Nani’s Kitchen! I would like to place an order.');

  return (
    <div className="container-site max-w-3xl py-12">
      <Seo title="Send your WhatsApp order" description="Your Nani’s Kitchen order is ready to send on WhatsApp for confirmation." />
      <div className="card p-8 sm:p-10">
        <p className="badge">Almost there</p>
        <h1 className="mt-4 font-display text-4xl text-brown-dark">Please send the WhatsApp message</h1>
        <p className="mt-4 leading-7 text-brown-muted">
          WhatsApp opens with your order details already filled in. This does not confirm the order by itself. Tap send in WhatsApp, then wait for Nani’s Kitchen to confirm availability, timing, and payment.
        </p>
        <pre className="mt-6 overflow-x-auto whitespace-pre-wrap rounded-2xl bg-ivory p-4 text-sm text-brown-dark">{message}</pre>
        <div className="mt-6 flex flex-wrap gap-3">
          <WhatsAppButton label="Open WhatsApp again" message={message} />
          <Link to="/menu" className="btn-secondary">Keep browsing</Link>
        </div>
      </div>
    </div>
  );
}
