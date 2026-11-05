import { Search } from 'lucide-react';
import { filterOptions } from '../data/menuItems';

export default function MenuFilters({ category, query, sort, onCategory, onQuery, onSort }) {
  return (
    <div className="mb-8 grid gap-4 rounded-[1.5rem] border border-brown-dark/10 bg-white p-3 shadow-soft md:grid-cols-[minmax(0,1.7fr)_minmax(170px,0.75fr)_minmax(170px,0.75fr)] md:items-end md:gap-5">
      <label className="block w-full">
        <span className="mb-1.5 block text-sm font-semibold text-brown-dark">Search by food name</span>
        <span className="relative block">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-brown-muted" />
          <input
            type="search"
            value={query}
            onChange={(event) => onQuery(event.target.value)}
            placeholder="Try paratha, roti, curry..."
            className="input h-11 pl-10 pr-3 text-sm"
          />
        </span>
      </label>
      <label className="block w-full">
        <span className="mb-1.5 block text-sm font-semibold text-brown-dark">Category</span>
        <select value={category} onChange={(event) => onCategory(event.target.value)} className="input h-11 text-sm">
          {filterOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <label className="block w-full">
        <span className="mb-1.5 block text-sm font-semibold text-brown-dark">Sort</span>
        <select value={sort} onChange={(event) => onSort(event.target.value)} className="input h-11 text-sm">
          <option value="featured">Featured</option>
          <option value="price-asc">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
        </select>
      </label>
      <div className="flex flex-wrap gap-2 md:col-span-3">
        {filterOptions.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onCategory(option.id)}
            aria-pressed={category === option.id}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              category === option.id ? 'bg-leaf text-white' : 'bg-ivory text-brown-dark'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
