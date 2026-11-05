import { useLocation } from 'react-router-dom';
import { business, whatsappChatUrl } from '../config/business';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  const { pathname } = useLocation();
  const checkoutOffset = pathname === '/checkout' || pathname === '/cart';

  return (
    <a
      href={whatsappChatUrl(`Hello ${business.name}! I would like to place an order.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Nani’s Kitchen on WhatsApp"
      className={`fixed z-40 flex h-14 w-14 items-center justify-center rounded-full bg-leaf text-white shadow-lg transition hover:bg-leaf-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
        checkoutOffset ? 'bottom-24 right-4 sm:bottom-6 sm:right-6' : 'bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 sm:bottom-6 sm:right-6'
      }`}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
