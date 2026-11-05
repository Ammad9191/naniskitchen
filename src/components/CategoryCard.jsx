import { Link } from 'react-router-dom';
import FoodImage from './FoodImage';

export default function CategoryCard({ category }) {
  return (
    <Link to={category.path} className="card group block">
      <FoodImage src={category.image} alt={category.name} className="aspect-[4/3] w-full transition duration-300 group-hover:scale-[1.03]" />
      <div className="p-5">
        <h3 className="font-display text-2xl text-brown-dark">{category.name}</h3>
        <p className="mt-2 text-sm leading-6 text-brown-muted">{category.description}</p>
        <span className="mt-4 inline-flex text-sm font-semibold text-leaf">View Menu</span>
      </div>
    </Link>
  );
}
