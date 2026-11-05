import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { business } from '../config/business';
import { getItemById } from '../data/menuItems';

const CART_KEY = 'nanis-kitchen-cart';
const CUSTOMER_KEY = 'nanis-kitchen-customer';

const CartContext = createContext(null);

const readJson = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

export function CartProvider({ children }) {
  const [lines, setLines] = useState(() => readJson(CART_KEY, []));
  const [customer, setCustomer] = useState(() =>
    readJson(CUSTOMER_KEY, {
      name: '',
      phone: '',
      address: '',
      area: '',
      instructions: '',
      deliveryPreference: business.deliveryWindows[0],
      paymentPreference: business.payments[0].label,
    }),
  );
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(lines));
  }, [lines]);

  useEffect(() => {
    localStorage.setItem(CUSTOMER_KEY, JSON.stringify(customer));
  }, [customer]);

  const addItem = (item, quantity = 1) => {
    if (!item?.available) return { ok: false, reason: 'unavailable' };
    setLines((current) => {
      const existing = current.find((line) => line.id === item.id);
      if (existing) {
        return current.map((line) =>
          line.id === item.id ? { ...line, quantity: line.quantity + quantity } : line,
        );
      }
      return [...current, { id: item.id, quantity }];
    });
    return { ok: true };
  };

  const updateQuantity = (id, quantity) => {
    setLines((current) => {
      if (quantity <= 0) return current.filter((line) => line.id !== id);
      return current.map((line) => (line.id === id ? { ...line, quantity } : line));
    });
  };

  const removeItem = (id) => setLines((current) => current.filter((line) => line.id !== id));
  const clearCart = () => setLines([]);

  const items = useMemo(
    () =>
      lines
        .map((line) => {
          const product = getItemById(line.id);
          if (!product) return null;
          return { ...product, quantity: line.quantity, lineTotal: product.price * line.quantity };
        })
        .filter(Boolean),
    [lines],
  );

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
  const deliveryFee = business.delivery.freeDelivery ? 0 : business.delivery.fee;
  const total = subtotal + deliveryFee;

  const value = {
    items,
    totalQuantity,
    subtotal,
    deliveryFee,
    total,
    drawerOpen,
    setDrawerOpen,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    customer,
    setCustomer,
    getQuantity: (id) => lines.find((line) => line.id === id)?.quantity || 0,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
