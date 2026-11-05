import { images } from './images';

export const categories = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    description: 'Warm roti, paratha, and comforting morning plates.',
    image: images.breakfast,
    path: '/breakfast',
  },
  {
    id: 'dinner',
    name: 'Dinner',
    description: 'Homemade curries, rice, and complete evening meals.',
    image: images.dinner,
    path: '/dinner',
  },
  {
    id: 'roti',
    name: 'Roti',
    description: 'Soft, freshly prepared roti for breakfast or dinner.',
    image: images.roti,
    path: '/roti-paratha',
  },
  {
    id: 'paratha',
    name: 'Paratha',
    description: 'Flaky homemade paratha, plain or filled.',
    image: images.paratha,
    path: '/roti-paratha',
  },
  {
    id: 'rice-specials',
    name: 'Rice & Special Meals',
    description: 'Vegetable rice and hearty homemade specials.',
    image: images.rice,
    path: '/menu?category=rice-specials',
  },
  {
    id: 'frozen-food',
    name: 'Frozen Food',
    description: 'Homemade frozen items — ready to cook, bursting with flavour.',
    image: images.frozenFood,
    path: '/menu?category=frozen-food',
  },
];

export const filterOptions = [
  { id: 'all', label: 'All items' },
  { id: 'breakfast', label: 'Breakfast' },
  { id: 'dinner', label: 'Dinner' },
  { id: 'roti', label: 'Roti' },
  { id: 'paratha', label: 'Paratha' },
  { id: 'rice-specials', label: 'Rice & Specials' },
  { id: 'frozen-food', label: 'Frozen Food' },
];


/**
 * Sample menu for development. Confirm prices and availability on WhatsApp.
 */
export const menuItems = [
  {
    id: 'breakfast-plain-roti',
    name: 'Plain Roti',
    category: 'breakfast',
    description: 'Soft homemade roti, prepared fresh for breakfast.',
    price: 40,
    image: images.roti,
    available: true,
    featured: false,
    tags: ['roti', 'vegetarian'],
  },
  {
    id: 'breakfast-plain-paratha',
    name: 'Plain Paratha',
    category: 'paratha',
    meal: 'breakfast',
    description: 'Golden, flaky paratha made in a home kitchen style.',
    price: 60,
    image: images.paratha,
    available: true,
    featured: true,
    tags: ['paratha', 'breakfast', 'vegetarian'],
  },
  {
    id: 'breakfast-aloo-paratha',
    name: 'Aloo Paratha',
    category: 'paratha',
    meal: 'breakfast',
    description: 'Stuffed potato paratha with a comforting homemade taste.',
    price: 120,
    image: images.alooParatha,
    available: true,
    featured: true,
    tags: ['paratha', 'breakfast', 'vegetarian'],
  },
  {
    id: 'breakfast-omlate-paratha',
    name: 'Omlate Paratha',
    category: 'paratha',
    meal: 'breakfast',
    description: 'A savory omelet paratha breakfast favorite, prepared fresh and hearty.',
    price: 220,
    image: images.omlateParatha,
    available: true,
    featured: true,
    tags: ['paratha', 'breakfast', 'egg'],
  },
  {
    id: 'breakfast-fry-egg-paratha',
    name: 'Fry Egg Paratha',
    category: 'paratha',
    meal: 'breakfast',
    description: 'Warm paratha served with a crispy fried egg for a filling breakfast.',
    price: 200,
    image: images.parathaFryEgg,
    available: true,
    featured: true,
    tags: ['paratha', 'breakfast', 'egg'],
  },
  {
    id: 'breakfast-tea',
    name: 'Tea',
    category: 'breakfast',
    description: 'Freshly brewed breakfast tea served hot and comforting.',
    price: 70,
    image: images.tea,
    available: true,
    featured: false,
    tags: ['breakfast', 'beverage'],
  },
  {
    id: 'dinner-plain-roti',
    name: 'Plain Roti',
    category: 'roti',
    meal: 'dinner',
    description: 'Fresh dinner roti to pair with homemade curries.',
    price: 40,
    image: images.roti,
    available: true,
    featured: false,
    tags: ['roti', 'dinner', 'vegetarian'],
  },
  {
    id: 'dinner-vegetable-rice',
    name: 'Vegetable Rice',
    category: 'rice-specials',
    meal: 'dinner',
    description: 'Fragrant rice cooked with mixed vegetables for a complete plate.',
    price: 350,
    image: images.vegRice,
    available: true,
    featured: false,
    tags: ['rice', 'dinner', 'vegetarian'],
  },
  {
    id: 'dinner-mix-sabzi',
    name: 'Mix Sabzi',
    category: 'dinner',
    meal: 'dinner',
    description: 'A comforting homemade mix of seasonal vegetables cooked with gentle spices.',
    price: 300,
    image: images.mixSabzi,
    available: true,
    featured: false,
    tags: ['dinner', 'vegetarian'],
  },
  {
    id: 'dinner-chicken-biryani',
    name: 'Chicken Biryani',
    category: 'rice-specials',
    meal: 'dinner',
    description: 'Aromatic chicken biryani cooked with traditional spices and long-grain rice.',
    price: 400,
    image: images.biryani,
    available: true,
    featured: true,
    tags: ['rice', 'dinner', 'chicken'],
  },
  {
    id: 'dinner-chicken-korma',
    name: 'Chicken Korma',
    category: 'dinner',
    description: 'A rich and comforting homemade chicken korma with classic spice depth.',
    price: 400,
    image: images.curry,
    available: true,
    featured: true,
    tags: ['dinner', 'chicken'],
  },
  {
    id: 'dinner-chicken-karahi',
    name: 'Chicken Karahi',
    category: 'dinner',
    description: 'Classic chicken karahi cooked with tomatoes, ginger, and aromatic spices.',
    price: 400,
    image: images.karahi,
    available: true,
    featured: true,
    tags: ['dinner', 'chicken'],
  },
  {
    id: 'dinner-palak-chicken',
    name: 'Palak Chicken',
    category: 'dinner',
    description: 'Tender chicken in a creamy spinach gravy, rich and comforting for dinner.',
    price: 350,
    image: images.palakChicken,
    available: true,
    featured: true,
    tags: ['dinner', 'chicken'],
  },
  {
    id: 'frozen-chicken-nuggets',
    name: 'Chicken Nuggets',
    category: 'frozen-food',
    description: 'Crispy homemade chicken nuggets, seasoned and ready to fry or bake from frozen — per dozen.',
    price: 600,
    image: images.chickenNuggets,
    available: true,
    featured: true,
    tags: ['frozen-food', 'chicken', 'frozen'],
  },
  {
    id: 'frozen-chicken-kofta',
    name: 'Chicken Kofta',
    category: 'frozen-food',
    description: 'Juicy minced chicken koftas, spiced with traditional herbs — cook straight from frozen, per dozen.',
    price: 700,
    image: images.chickenKofta,
    available: true,
    featured: true,
    tags: ['frozen-food', 'chicken', 'frozen'],
  },
  {
    id: 'frozen-shami-kabab',
    name: 'Shami Kabab',
    category: 'frozen-food',
    description: 'Classic homemade shami kababs made with lentils and mince, perfect for a quick snack or side — per dozen.',
    price: 700,
    image: images.shamiKabab,
    available: true,
    featured: true,
    tags: ['frozen-food', 'chicken', 'frozen'],
  },
];

export const getItemById = (id) => menuItems.find((item) => item.id === id);

export const getItemsByRoute = (routeKey) => {
  if (routeKey === 'breakfast') {
    return menuItems.filter(
      (item) => item.category === 'breakfast' || item.meal === 'breakfast' || item.tags?.includes('breakfast'),
    );
  }
  if (routeKey === 'dinner') {
    return menuItems.filter(
      (item) => item.category === 'dinner' || item.meal === 'dinner' || item.tags?.includes('dinner'),
    );
  }
  if (routeKey === 'roti-paratha') {
    return menuItems.filter(
      (item) =>
        item.category === 'roti' ||
        item.category === 'paratha' ||
        item.category === 'breakfast' ||
        item.tags?.includes('roti') ||
        item.tags?.includes('paratha'),
    );
  }
  return menuItems;
};

export const filterMenuItems = ({ items = menuItems, category = 'all', query = '', sort = 'featured' }) => {
  const q = query.trim().toLowerCase();

  let next = items.filter((item) => {
    const matchesCategory =
      category === 'all' ||
      item.category === category ||
      item.meal === category ||
      item.tags?.includes(category);
    const matchesQuery = !q || item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  if (sort === 'price-asc') next = [...next].sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') next = [...next].sort((a, b) => b.price - a.price);
  else next = [...next].sort((a, b) => Number(b.featured) - Number(a.featured) || a.name.localeCompare(b.name));

  return next;
};
