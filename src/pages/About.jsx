import SectionHeading from '../components/SectionHeading';
import Seo from '../components/Seo';
import FoodImage from '../components/FoodImage';
import { images, imageAlts } from '../data/images';

const values = [
  {
    title: 'Made with Care',
    text: 'Every plate is prepared as everyday homemade food — familiar, warm, and made to be shared.',
  },
  {
    title: 'Comforting Homemade Taste',
    text: 'Breakfast roti and paratha, dinner curries, and rice meals that feel like they came from a family kitchen.',
  },
  {
    title: 'Convenient Food Delivery',
    text: 'Order from Lahore, send the details on WhatsApp, and enjoy free home delivery as currently offered.',
  },
];

export default function About() {
  return (
    <div className="container-site py-12">
      <Seo title="About Us" description="Nani’s Kitchen prepares homemade Pakistani meals with care and delivers them across Lahore." />
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Our kitchen"
            title="Homemade Food, Made with Love."
            text="At Nani’s Kitchen, we believe that good food brings people together. Our goal is to make everyday meals feel comforting, familiar, and delicious. From breakfast favorites to dinner and freshly prepared roti and paratha, we bring homemade food to your table with care."
          />
        </div>
        <FoodImage src={images.about} alt={imageAlts.about} className="min-h-[280px] rounded-[2rem]" />
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {values.map((value) => (
          <article key={value.title} className="card p-6">
            <h2 className="font-display text-2xl text-brown-dark">{value.title}</h2>
            <p className="mt-3 text-sm leading-6 text-brown-muted">{value.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
