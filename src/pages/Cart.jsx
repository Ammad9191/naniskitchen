import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import OrderSummary from '../components/OrderSummary';
import Seo from '../components/Seo';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { items, updateQuantity, removeItem, subtotal, deliveryFee, total } = useCart();

  return (
    <div className="container-site py-12">
      <Seo title="Cart" description="Review your Nani’s Kitchen order before sending it on WhatsApp." />
      <h1 className="font-display text-4xl text-brown-dark">Your cart</h1>
      {items.length ? (
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <ul className="card px-5">
            {items.map((item) => (
              <CartItem key={item.id} item={item} onQuantity={updateQuantity} onRemove={removeItem} />
            ))}
          </ul>
          <div className="space-y-4">
            <OrderSummary items={items} subtotal={subtotal} deliveryFee={deliveryFee} total={total} />
            <Link to="/checkout" className="btn-primary w-full">Continue to checkout</Link>
            <Link to="/menu" className="btn-secondary w-full">Add more dishes</Link>
          </div>
        </div>
      ) : (
        <div className="mt-10 rounded-3xl bg-white p-10 text-center shadow-soft">
          <p className="font-display text-2xl text-brown-dark">Your basket is waiting</p>
          <p className="mt-2 text-brown-muted">Add roti, paratha, or a homemade meal to get started.</p>
          <Link to="/menu" className="btn-brown mt-6">Browse the menu</Link>
        </div>
      )}
    </div>
  );
}
