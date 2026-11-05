import { business, whatsappChatUrl } from '../config/business';
import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppButton({
  label = 'Order on WhatsApp',
  message = `Hello ${business.name}! I would like to know more about your homemade meals.`,
  className = 'btn-primary',
}) {
  return (
    <a href={whatsappChatUrl(message)} target="_blank" rel="noopener noreferrer" className={className}>
      <WhatsAppIcon />
      {label}
    </a>
  );
}
