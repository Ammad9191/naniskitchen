import { Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPKR } from '../utils/currency';
import FoodImage from './FoodImage';

export default function FoodCard({ item }) {
  const { addItem, updateQuantity, getQuantity } = useCart();
  const quantity = getQuantity(item.id);

  return (
    <article className="card flex h-full flex-col">
      <div className="relative">
        <FoodImage src={item.image} alt={item.name} className="aspect-[4/3] w-full" />
        <span className="absolute left-3 top-3 rounded-full bg-cream/95 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brown-dark">
          {item.tags?.includes('breakfast') || item.meal === 'breakfast' ? 'Breakfast' : item.category.replace('-', ' ')}
        </span>
        {!item.available ? (
          <span className="absolute right-3 top-3 rounded-full bg-brown-dark px-3 py-1 text-xs font-semibold text-cream">
            Currently unavailable
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl text-brown-dark">{item.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-brown-muted">{item.description}</p>
        <p className="mt-4 font-display text-2xl text-brown-dark">{formatPKR(item.price)}</p>
        <div className="mt-4">
          {!item.available ? (
            <p className="text-sm font-medium text-brown-muted">This sample item is marked out of stock.</p>
          ) : quantity > 0 ? (
            <div className="flex items-center justify-between rounded-full bg-ivory px-2 py-1">
              <button type="button" className="rounded-full p-2" aria-label={`Decrease ${item.name}`} onClick={() => updateQuantity(item.id, quantity - 1)}>
                <Minus className="h-4 w-4" />
              </button>
              <span aria-live="polite">{quantity}</span>
              <button type="button" className="rounded-full p-2" aria-label={`Increase ${item.name}`} onClick={() => updateQuantity(item.id, quantity + 1)}>
                <Plus className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <button type="button" className="btn-primary w-full" onClick={() => addItem(item)}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
