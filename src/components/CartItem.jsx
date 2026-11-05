import { Minus, Plus, Trash2 } from 'lucide-react';
import { formatPKR } from '../utils/currency';
import FoodImage from './FoodImage';

export default function CartItem({ item, onQuantity, onRemove }) {
  return (
    <li className="flex gap-4 border-b border-brown-dark/10 py-4">
      <FoodImage src={item.image} alt={item.name} className="h-20 w-20 shrink-0 rounded-2xl" />
      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-semibold text-brown-dark">{item.name}</p>
            <p className="text-sm text-brown-muted">{formatPKR(item.price)} each</p>
          </div>
          <button type="button" className="rounded-full p-2 text-brown-muted hover:bg-ivory" onClick={() => onRemove(item.id)} aria-label={`Remove ${item.name}`}>
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center rounded-full bg-ivory">
            <button type="button" className="p-2" aria-label={`Decrease ${item.name}`} onClick={() => onQuantity(item.id, item.quantity - 1)}>
              <Minus className="h-4 w-4" />
            </button>
            <span className="min-w-8 text-center text-sm">{item.quantity}</span>
            <button type="button" className="p-2" aria-label={`Increase ${item.name}`} onClick={() => onQuantity(item.id, item.quantity + 1)}>
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <p className="font-semibold">{formatPKR(item.lineTotal)}</p>
        </div>
      </div>
    </li>
  );
}
