/**
 * Food photography assets with reliable local high-resolution files and remote fallbacks.
 */
const publicImage = (filename) => `${import.meta.env.BASE_URL}images/${filename}`;

export const images = {
  hero: 'https://images.unsplash.com/photo-1701579231305-d84d8afef6a9?auto=format&fit=crop&w=1400&q=80',
  breakfast: publicImage('breakfast.jpg'),
  dinner: publicImage('dinner_image.jpg'),
  roti: publicImage('plain_roti.jpg'),
  paratha: publicImage('plain_paratha.jpg'),
  alooParatha: publicImage('aloo_paratha.jpg'),
  omlateParatha: publicImage('omlate_pratha.jpg'),
  parathaFryEgg: publicImage('paratha_fryegg.jpg'),
  tea: publicImage('tea_image.jpg'),
  rice: 'https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?auto=format&fit=crop&w=900&q=80',
  biryani: publicImage('chicken_biryani.jpg'),
  curry: publicImage('chicken_korma.jpg'),
  karahi: publicImage('chicken_karahi.jpg'),
  palakChicken: publicImage('palak_chicken.jpg'),
  vegRice: publicImage('vegetable_rice.jpg'),
  mixSabzi: publicImage('mix_sabzi.jpg'),
  special: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80',
  about: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
  frozenFood: publicImage('frozen_food.jpg'),
  chickenNuggets: publicImage('chicken_nigates.jpg'),
  chickenKofta: publicImage('chicken_kofta.jpg'),
  shamiKabab: publicImage('shami_kabab.jpg'),
};

export const imageAlts = {
  hero: 'Homemade Pakistani chicken biryani plated for delivery',
  breakfast: 'Authentic traditional Pakistani breakfast platter with fresh paratha, cholay, and sides',
  dinner: 'Traditional homemade dinner platter with rice and curry',
  roti: 'Freshly prepared roti stacked on a plate',
  paratha: 'Golden flaky plain paratha fresh on the tawa',
  alooParatha: 'Delicious stuffed aloo parathas sizzling on tawa griddle',
  omlateParatha: 'Omlate paratha breakfast item served fresh',
  parathaFryEgg: 'Fry egg paratha breakfast served fresh',
  tea: 'Fresh breakfast tea served hot',
  rice: 'Vegetable rice in a serving bowl',
  biryani: 'Aromatic chicken biryani',
  curry: 'Homemade chicken korma meal',
  karahi: 'Traditional chicken karahi prepared fresh',
  palakChicken: 'Palak chicken prepared in a rich spinach gravy',
  vegRice: 'Vegetable rice prepared at home',
  mixSabzi: 'Homemade mixed vegetable curry',
  special: 'Homemade special meal with curry and bread',
  about: 'Warm homemade meal shared at the table',
  frozenFood: 'Frozen food items ready for cooking',
  chickenNuggets: 'Golden crispy chicken nuggets',
  chickenKofta: 'Homemade chicken kofta kabab',
  shamiKabab: 'Traditional shami kabab patties',
};
