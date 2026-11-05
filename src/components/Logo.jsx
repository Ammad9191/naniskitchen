import { Link } from 'react-router-dom';
import logoImg from '../asset/nani_kitchen_logo.png';

export default function Logo({ className = '' }) {
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`} aria-label="Nani’s Kitchen home">
      <img
        src={logoImg}
        alt="Nani's Kitchen Logo"
        className="h-12 w-12 object-contain drop-shadow-sm transition-transform duration-200 hover:scale-105 sm:h-14 sm:w-14"
      />
      <span className="leading-tight">
        <span className="block font-display text-lg tracking-[0.14em] text-brown-dark sm:text-xl">NANI’S KITCHEN</span>
        <span className="hidden text-[0.68rem] uppercase tracking-[0.22em] text-brown-muted sm:block">
          Fresh & Homemade Meals
        </span>
      </span>
    </Link>
  );
}
