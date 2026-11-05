import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Logo from './Logo';
import WhatsAppButton from './WhatsAppButton';

const links = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { totalQuantity, setDrawerOpen } = useCart();

  const linkClass = ({ isActive }) =>
    `rounded-full px-3 py-2 text-sm font-semibold ${isActive ? 'bg-ivory text-brown-dark' : 'text-brown-muted hover:text-brown-dark'}`;

  return (
    <header className="sticky top-0 z-50 border-b border-brown-dark/10 bg-cream/95 shadow-header backdrop-blur">
      <div className="container-site flex h-[4.5rem] items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="relative rounded-full p-2 text-brown-dark hover:bg-ivory"
            aria-label={`Open cart, ${totalQuantity} items`}
            onClick={() => setDrawerOpen(true)}
          >
            <ShoppingBag className="h-5 w-5" />
            {totalQuantity > 0 ? (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-leaf px-1 text-[11px] font-bold text-white">
                {totalQuantity}
              </span>
            ) : null}
          </button>
          <div className="hidden sm:block">
            <WhatsAppButton className="btn-primary px-4 py-2.5 text-sm" />
          </div>
          <button
            type="button"
            className="rounded-full p-2 text-brown-dark hover:bg-ivory lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open ? (
        <div id="mobile-nav" className="border-t border-brown-dark/10 bg-cream lg:hidden">
          <nav className="container-site flex flex-col gap-2 py-4" aria-label="Mobile">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClass}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/cart" className="rounded-full px-3 py-2 text-sm font-semibold" onClick={() => setOpen(false)}>
              Cart
            </Link>
            <WhatsAppButton className="btn-primary mt-2" />
          </nav>
        </div>
      ) : null}
    </header>
  );
}
