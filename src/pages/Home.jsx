import { Link } from 'react-router-dom';
import { ChefHat, HeartHandshake, MessageCircle, Truck } from 'lucide-react';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import FoodGrid from '../components/FoodGrid';
import SectionHeading from '../components/SectionHeading';
import Seo from '../components/Seo';
import WhatsAppButton from '../components/WhatsAppButton';
import { business } from '../config/business';
import { categories, menuItems } from '../data/menuItems';
import { images, imageAlts } from '../data/images';
import FoodImage from '../components/FoodImage';

const values = [
  { icon: ChefHat, title: 'Freshly Prepared Meals', text: 'Everyday dishes cooked in a homemade style, then packed for delivery.' },
  { icon: HeartHandshake, title: 'Homemade Pakistani Food', text: 'Roti, paratha, rice, and comforting meals inspired by home kitchens.' },
  { icon: MessageCircle, title: 'Easy WhatsApp Ordering', text: 'Build your cart here, then send the order on WhatsApp for confirmation.' },
  { icon: Truck, title: 'Free Home Delivery', text: business.delivery.note },
];

export default function Home() {
  const featured = menuItems.filter((item) => item.featured && item.available);

  return (
    <>
      <Seo
        title="Fresh & Homemade Meals"
        description="Nani’s Kitchen delivers homemade Pakistani breakfast, dinner, roti, and paratha in Lahore. Order on WhatsApp."
      />
      <Hero />
      <section className="container-site py-16">
        <SectionHeading
          eyebrow="Our table"
          title="Choose a homemade favorite"
          text="Browse breakfast, dinner, roti, paratha, and special meals. Prices in this sample menu should be confirmed on WhatsApp."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
      <section className="bg-ivory py-16">
        <div className="container-site">
          <SectionHeading eyebrow="Featured" title="A few dishes to start with" />
          <FoodGrid items={featured} />
          <div className="mt-8 text-center">
            <Link to="/menu" className="btn-brown">See the full menu</Link>
          </div>
        </div>
      </section>
      <section className="container-site grid items-center gap-10 py-16 lg:grid-cols-2">
        <FoodImage src={images.about} alt={imageAlts.about} className="h-full min-h-[280px] rounded-[2rem]" />
        <div>
          <SectionHeading
            align="left"
            eyebrow="About Nani’s Kitchen"
            title="Homemade Food, Made with Love."
            text="At Nani’s Kitchen, we believe that good food brings people together. Our goal is to make everyday meals feel comforting, familiar, and delicious. From breakfast favorites to dinner and freshly prepared roti and paratha, we bring homemade food to your table with care."
          />
          <ul className="space-y-4">
            {['Made with Care', 'Comforting Homemade Taste', 'Convenient Food Delivery'].map((value) => (
              <li key={value} className="rounded-2xl bg-white px-5 py-4 font-semibold text-brown-dark shadow-soft">
                {value}
              </li>
            ))}
          </ul>
          <Link to="/about" className="btn-secondary mt-6">Our story</Link>
        </div>
      </section>
      <section className="bg-brown-dark py-16 text-cream">
        <div className="container-site">
          <SectionHeading
            eyebrow="Why choose us"
            title="Warm meals, simple ordering"
            text="We keep the promise small and honest: homemade Pakistani food, WhatsApp ordering, and free home delivery as currently offered."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-3xl bg-white/5 p-6">
                <Icon className="h-8 w-8 text-gold" />
                <h3 className="mt-4 font-display text-2xl text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-cream/80">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="container-site py-16">
        <div className="card bg-ivory p-8 text-center sm:p-12">
          <p className="font-script text-3xl text-leaf-olive">We’d love to hear from you</p>
          <h2 className="mt-3 font-display text-3xl text-brown-dark">Share your mealtime feedback</h2>
          <p className="mx-auto mt-3 max-w-2xl text-brown-muted">
            Customer reviews will appear here once real feedback is collected. Until then, send a note on WhatsApp after your order — we will not display invented ratings.
          </p>
          <div className="mt-6 flex justify-center">
            <WhatsAppButton label="Send feedback on WhatsApp" message={`Hello ${business.name}! I would like to share feedback about my order.`} />
          </div>
        </div>
      </section>
    </>
  );
}
