import { Link } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm';
import Seo from '../components/Seo';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { items } = useCart();

  return (
    <div className="container-site py-12">
      <Seo title="Checkout" description="Place a Nani’s Kitchen order on WhatsApp for homemade food delivery in Lahore." />
      {items.length ? (
        <CheckoutForm />
      ) : (
        <div className="card p-10 text-center">
          <h1 className="font-display text-3xl text-brown-dark">Add a dish before checkout</h1>
          <p className="mt-3 text-brown-muted">Your cart is empty, so there is nothing to send on WhatsApp yet.</p>
          <Link to="/menu" className="btn-brown mt-6">Go to menu</Link>
        </div>
      )}
    </div>
  );
}
