import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';
import OrderSummary from './OrderSummary';

export default function CartDrawer() {
  const { drawerOpen, setDrawerOpen, items, updateQuantity, removeItem, subtotal, deliveryFee, total } = useCart();

  if (!drawerOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-labelledby="cart-drawer-title">
      <button type="button" className="absolute inset-0 bg-brown-dark/40" aria-label="Close cart" onClick={() => setDrawerOpen(false)} />
      <div className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream shadow-card">
        <div className="flex items-center justify-between border-b border-brown-dark/10 px-5 py-4">
          <h2 id="cart-drawer-title" className="font-display text-2xl text-brown-dark">Your cart</h2>
          <button type="button" className="rounded-full p-2" onClick={() => setDrawerOpen(false)} aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5">
          {items.length ? (
            <ul>
              {items.map((item) => (
                <CartItem key={item.id} item={item} onQuantity={updateQuantity} onRemove={removeItem} />
              ))}
            </ul>
          ) : (
            <p className="py-12 text-center text-brown-muted">Your cart is empty. Add a homemade favorite from the menu.</p>
          )}
        </div>
        <div className="space-y-3 border-t border-brown-dark/10 p-5">
          {items.length ? <OrderSummary items={items} subtotal={subtotal} deliveryFee={deliveryFee} total={total} /> : null}
          <Link to="/cart" className="btn-secondary w-full" onClick={() => setDrawerOpen(false)}>
            View cart
          </Link>
          <Link to="/checkout" className={`btn-primary w-full ${items.length ? '' : 'pointer-events-none opacity-50'}`} onClick={() => setDrawerOpen(false)}>
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
