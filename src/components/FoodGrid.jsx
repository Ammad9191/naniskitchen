import FoodCard from './FoodCard';

export default function FoodGrid({ items, emptyText = 'No dishes match your search. Try another name or category.' }) {
  if (!items.length) {
    return (
      <div className="rounded-3xl border border-dashed border-brown-dark/20 bg-white px-6 py-16 text-center">
        <p className="font-display text-2xl text-brown-dark">Nothing on the table yet</p>
        <p className="mt-2 text-brown-muted">{emptyText}</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <FoodCard key={item.id} item={item} />
      ))}
    </div>
  );
}
