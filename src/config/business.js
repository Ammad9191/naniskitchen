export const business = {
  name: 'Nani’s Kitchen',
  shortName: 'NANI’S KITCHEN',
  tagline: 'Fresh & Homemade Meals',
  slogan: 'Taste the Love in Every Bite!',
  city: 'Lahore',
  country: 'Pakistan',
  serviceArea: 'Lahore, Pakistan',
  phoneDisplay: '0326-1222735',
  phoneLocal: '03261222735',
  whatsappNumber: '923261222735',
  currency: 'PKR',
  locale: 'en-PK',
  openingHours: {
    summary: 'Open daily for breakfast and dinner orders',
    days: [
      { label: 'Monday – Thursday', hours: '8:00 AM – 10:00 PM' },
      { label: 'Friday – Sunday', hours: '8:00 AM – 11:00 PM' },
    ],
    note: 'Order timing is confirmed on WhatsApp based on kitchen availability.',
  },
  delivery: {
    fee: 0,
    freeDelivery: true,
    label: 'Free Home Delivery',
    minimumOrder: 0,
    note: 'Free home delivery is the current offer for eligible Lahore orders. Final delivery details are confirmed on WhatsApp.',
  },
  payments: [
    { id: 'cod', label: 'Cash on Delivery', hint: 'Pay when your order arrives, subject to confirmation.' },
    { id: 'bank', label: 'Bank Transfer', hint: 'Account details will be shared on WhatsApp if needed.' },
  ],
  deliveryWindows: [
    'As soon as possible',
    'Breakfast time',
    'Lunch time',
    'Dinner time',
    'I’ll specify in instructions',
  ],
  sampleMenuNotice:
    'Menu items and prices shown here are sample values for this website and should be confirmed on WhatsApp before ordering.',
};

export const whatsappChatUrl = (text = '') => {
  const base = `https://wa.me/${business.whatsappNumber}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
};
