import { Link } from 'react-router-dom';
import { business } from '../config/business';
import { categories } from '../data/menuItems';
import Logo from './Logo';
import WhatsAppButton from './WhatsAppButton';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-brown-dark/10 bg-brown-dark text-cream">
      <div className="container-site grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo className="[&_span]:text-cream [&_.text-brown-muted]:text-gold-soft" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-cream/80">{business.tagline}. {business.slogan}</p>
          <p className="mt-3 font-script text-2xl text-gold">{business.delivery.label}</p>
        </div>
        <div>
          <h2 className="font-display text-lg text-white">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/menu" className="hover:text-white">Menu</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-lg text-white">Food Categories</h2>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            {categories.map((category) => (
              <li key={category.id}>
                <Link to={category.path} className="hover:text-white">{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-lg text-white">Contact</h2>
          <p className="mt-4 text-sm text-cream/80">{business.serviceArea}</p>
          <p className="mt-2 text-sm">WhatsApp: {business.phoneDisplay}</p>
          <p className="mt-2 text-sm text-cream/80">{business.openingHours.summary}</p>
          <WhatsAppButton className="btn-primary mt-5 bg-leaf" />
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-cream/70">
        © {new Date().getFullYear()} {business.name}. Homemade food delivery in {business.city}.
      </div>
    </footer>
  );
}
