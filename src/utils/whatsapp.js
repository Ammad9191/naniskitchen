import { business, whatsappChatUrl } from '../config/business';
import { formatPKR } from './currency';

export const buildOrderMessage = ({ customer, items, subtotal, deliveryFee, total }) => {
  const lines = [
    `Hello ${business.name}! I would like to place an order.`,
    '',
    `Customer Name: ${customer.name}`,
    `Contact Number: ${customer.phone}`,
    `Delivery Address: ${customer.address}`,
    `Area: ${customer.area}`,
    customer.deliveryPreference ? `Preferred Time: ${customer.deliveryPreference}` : null,
    customer.paymentPreference ? `Payment Preference: ${customer.paymentPreference}` : null,
    '',
    'Order Items:',
    ...items.map(
      (item) => `- ${item.name} x ${item.quantity} = ${formatPKR(item.price * item.quantity)}`,
    ),
    '',
    `Subtotal: ${formatPKR(subtotal)}`,
    `Delivery: ${deliveryFee === 0 ? 'Free' : formatPKR(deliveryFee)}`,
    `Total: ${formatPKR(total)}`,
    '',
    `Special Instructions: ${customer.instructions?.trim() || 'None'}`,
    '',
    'Please confirm my order. Thank you!',
  ];

  return lines.filter((line) => line !== null).join('\n');
};

export const buildContactMessage = ({ name, phone, message }) =>
  [
    `Hello ${business.name}!`,
    '',
    `My name is ${name}.`,
    `Contact Number: ${phone}`,
    '',
    message,
  ].join('\n');

export const openWhatsApp = (message) => {
  const url = whatsappChatUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
  return url;
};

export { whatsappChatUrl };
