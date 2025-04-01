import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Sidr Honey',
    description: 'Our signature Sidr honey collected from the Sindh region of Pakistan. Known for its rich flavor and medicinal properties.',
    price: 1200,
    currency: 'PKR',
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'sidr',
    weight: '500g',
    region: 'Sindh',
    inStock: true,
    featured: true,
    isNew: false,
    rating: 4.9,
    labTested: true,
    seasonal: false,
    properties: {
      color: 'Golden Amber',
      texture: 'Thick',
      flavor: 'Rich and aromatic with caramel notes',
      pollen: 'Sidr tree pollen'
    }
  },
  {
    id: '2',
    name: 'Wild Berry Honey',
    description: 'Collected from the berry-rich forests of Northern Pakistan. A tangy and sweet delight.',
    price: 950,
    currency: 'PKR',
    image: 'https://images.unsplash.com/photo-1598524374912-8d897d146d64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'berry',
    weight: '500g',
    region: 'Northern Areas',
    inStock: true,
    featured: true,
    isNew: true,
    rating: 4.7,
    labTested: true,
    seasonal: true,
    availabilityPeriod: 'June - August',
    properties: {
      color: 'Deep Red',
      texture: 'Medium',
      flavor: 'Tangy with sweet berry undertones',
      pollen: 'Mixed berry pollen'
    }
  },
  {
    id: '3',
    name: 'Acacia Honey',
    description: 'Pure Acacia honey from the pristine forests of Khyber Pakhtunkhwa. Light and delicate.',
    price: 880,
    currency: 'PKR',
    image: 'https://images.unsplash.com/photo-1576362066238-c85b68974cc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'acacia',
    weight: '500g',
    region: 'Khyber Pakhtunkhwa',
    inStock: true,
    featured: false,
    isNew: false,
    rating: 4.5,
    labTested: true,
    seasonal: false,
    properties: {
      color: 'Light Gold',
      texture: 'Runny',
      flavor: 'Mild and floral',
      pollen: 'Acacia pollen'
    }
  },
  {
    id: '4',
    name: 'Himalayan Mountain Honey',
    description: 'Rare honey harvested from the high altitudes of the Himalayan range in Pakistan. Pure and untouched.',
    price: 1500,
    currency: 'PKR',
    image: 'https://images.unsplash.com/photo-1555211652-5c6222f971fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'himalayan',
    weight: '500g',
    region: 'Himalayan Range',
    inStock: true,
    featured: true,
    isNew: false,
    rating: 5.0,
    labTested: true,
    seasonal: true,
    availabilityPeriod: 'July - September',
    properties: {
      color: 'Crystal Clear',
      texture: 'Medium-thick',
      flavor: 'Clean, crisp with subtle floral notes',
      pollen: 'Mixed Himalayan wildflowers'
    }
  },
  {
    id: '5',
    name: 'Pakistani Wildflower Honey',
    description: 'A beautiful blend of various wildflowers from across Pakistan. A true taste of our country\'s floral diversity.',
    price: 900,
    currency: 'PKR',
    image: 'https://images.unsplash.com/photo-1471943311424-646960669fbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'wildflower',
    weight: '500g',
    region: 'Various',
    inStock: true,
    featured: false,
    isNew: false,
    rating: 4.6,
    labTested: true,
    seasonal: false,
    properties: {
      color: 'Amber',
      texture: 'Medium',
      flavor: 'Complex and varied with changing floral notes',
      pollen: 'Mixed wildflower pollen'
    }
  },
  {
    id: '6',
    name: 'Spring Blossom Collection',
    description: 'Limited edition honey collected during the spring bloom in Pakistan. A seasonal specialty.',
    price: 1300,
    currency: 'PKR',
    discountedPrice: 1100,
    image: 'https://images.unsplash.com/photo-1601063476271-a159c71ab0b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'specialty',
    weight: '500g',
    region: 'Punjab',
    inStock: true,
    featured: true,
    isNew: true,
    rating: 4.8,
    labTested: true,
    seasonal: true,
    availabilityPeriod: 'March - May',
    properties: {
      color: 'Light Amber',
      texture: 'Smooth',
      flavor: 'Delicate floral with hints of citrus',
      pollen: 'Spring blossom pollen mix'
    }
  }
];

export const regions = [
  'Sindh',
  'Punjab',
  'Khyber Pakhtunkhwa',
  'Balochistan',
  'Northern Areas',
  'Himalayan Range',
  'Various'
];

export const categories = [
  {
    id: 'raw-honey',
    name: 'Raw Honey',
    description: 'Pure, unprocessed honey direct from the hive'
  },
  {
    id: 'specialty-honey',
    name: 'Specialty Honey',
    description: 'Unique and rare honey varieties'
  },
  {
    id: 'herbal-honey',
    name: 'Herbal Honey',
    description: 'Honey infused with natural herbs'
  },
  {
    id: 'gift-sets',
    name: 'Gift Sets',
    description: 'Curated honey collections for gifting'
  }
];
