import { Link } from 'react-router-dom';
import { Leaf, Heart, Bike } from 'lucide-react';
import { business } from '../config/business';
import { images, imageAlts } from '../data/images';
import FoodImage from './FoodImage';
import WhatsAppButton from './WhatsAppButton';

const trusts = [
  { icon: Leaf, label: 'Freshly Prepared' },
  { icon: Heart, label: 'Homemade Taste' },
  { icon: Bike, label: 'Free Home Delivery' },
];

export default function Hero() {
  return (
    <section className="herb-bg overflow-hidden border-b border-brown-dark/10">
      <div className="container-site grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-16">
        <div>
          <p className="badge">FRESH • HOMEMADE • MADE WITH LOVE</p>
          <h1 className="mt-5 font-display text-4xl leading-tight text-brown-dark sm:text-5xl lg:text-6xl">
            Homemade Goodness, Delivered to Your Door.
          </h1>
          <p className="mt-4 font-script text-3xl text-leaf-olive">{business.slogan}</p>
          <p className="mt-5 max-w-xl text-lg leading-8 text-brown-muted">
            Enjoy delicious homemade Pakistani meals, freshly prepared with care and served with the warmth of home.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/menu" className="btn-brown">
              Explore Our Menu
            </Link>
            <WhatsAppButton className="btn-primary" />
          </div>
          <ul className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-brown-dark">
            {trusts.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-soft">
                <Icon className="h-4 w-4 text-leaf-olive" />
                {label}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-gold/20" aria-hidden="true" />
          <div className="absolute -bottom-8 -right-4 h-36 w-36 rounded-full bg-leaf/10" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2.2rem] border-[10px] border-ivory bg-white shadow-card">
            <FoodImage src={images.hero} alt={imageAlts.hero} className="aspect-[4/5] w-full sm:aspect-[5/6]" lazy={false} />
            <div className="absolute left-4 top-4 rounded-full bg-cream/95 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-brown-dark shadow-soft">
              Fresh & Homemade Daily
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
