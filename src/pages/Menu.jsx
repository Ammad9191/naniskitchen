import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import FoodGrid from '../components/FoodGrid';
import MenuFilters from '../components/MenuFilters';
import SectionHeading from '../components/SectionHeading';
import Seo from '../components/Seo';
import { business } from '../config/business';
import { filterMenuItems, getItemsByRoute, menuItems } from '../data/menuItems';

// Map each dedicated route key to the matching filterOptions id so the
// correct pill is highlighted when arriving from a category card on Home.
// roti-paratha shows both roti & paratha items so we default to 'all'
// (meaning "all items within this route"), not a single sub-category.
const routeKeyToCategory = {
  breakfast: 'breakfast',
  dinner: 'dinner',
  'roti-paratha': 'all',
};

const routeKeyToAllowedCategories = {
  breakfast: ['all', 'breakfast', 'roti', 'paratha'],
  dinner: ['all', 'dinner', 'roti', 'rice-specials'],
  'roti-paratha': ['all', 'roti', 'paratha'],
};

export default function Menu({ routeKey, title, intro }) {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const [routeFilter, setRouteFilter] = useState(() => routeKeyToCategory[routeKey] ?? 'all');

  const category = routeKey ? routeFilter : params.get('category') || 'all';

  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('featured');

  useEffect(() => {
    if (routeKey) {
      setRouteFilter(routeKeyToCategory[routeKey] ?? 'all');
    }
  }, [routeKey]);

  const source = routeKey ? getItemsByRoute(routeKey) : menuItems;
  const items = useMemo(
    () => filterMenuItems({ items: source, category, query, sort }),
    [source, category, query, sort],
  );

  const handleCategory = (value) => {
    if (routeKey) {
      const allowed = routeKeyToAllowedCategories[routeKey] || [];

      if (!allowed.includes(value)) {
        navigate(`/menu?category=${encodeURIComponent(value)}`, { replace: true });
        return;
      }

      setRouteFilter(value);
      return;
    }

    const next = new URLSearchParams(window.location.search);
    if (value === 'all') next.delete('category');
    else next.set('category', value);
    setParams(next, { replace: true });
  };

  return (
    <div className="container-site py-12">
      <Seo title={title || 'Menu'} description={intro || 'Browse homemade Pakistani meals from Nani\u2019s Kitchen.'} />
      <SectionHeading
        eyebrow="Menu"
        title={title || 'Homemade meals, ready to order'}
        text={intro || business.sampleMenuNotice}
      />
      <MenuFilters
        category={category}
        query={query}
        sort={sort}
        onCategory={handleCategory}
        onQuery={setQuery}
        onSort={setSort}
      />
      <FoodGrid items={items} />
    </div>
  );
}
