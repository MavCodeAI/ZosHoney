import { productService } from '../services/productService';
import { Product } from '../types/product';

const additionalProducts: Omit<Product, 'id'>[] = [
  {
    name: 'Royal Manuka Honey',
    description: 'Premium Manuka honey imported from New Zealand. Known for its exceptional medicinal properties and unique taste.',
    price: 2500,
    currency: 'PKR',
    image: 'https://images.unsplash.com/photo-1582354870503-cbe3d02b4d79?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'specialty',
    weight: '250g',
    region: 'Imported',
    inStock: true,
    featured: true,
    isNew: true,
    rating: 4.9,
    labTested: true,
    seasonal: false,
    properties: {
      color: 'Dark Amber',
      texture: 'Creamy',
      flavor: 'Rich and complex with earthy notes',
      pollen: 'Manuka flower pollen'
    }
  },
  {
    name: 'Orange Blossom Honey',
    description: 'Light and citrusy honey collected from orange orchards in Punjab. Perfect for tea and baking.',
    price: 850,
    currency: 'PKR',
    image: 'https://images.unsplash.com/photo-1585848061493-01643a6f8c8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'wildflower',
    weight: '500g',
    region: 'Punjab',
    inStock: true,
    featured: false,
    isNew: true,
    rating: 4.6,
    labTested: true,
    seasonal: true,
    availabilityPeriod: 'February - April',
    properties: {
      color: 'Light Gold',
      texture: 'Smooth',
      flavor: 'Delicate citrus with floral undertones',
      pollen: 'Orange blossom pollen'
    }
  },
  {
    name: 'Mountain Wildflower Honey',
    description: 'Raw honey collected from diverse wildflowers in the Swat Valley. Rich in antioxidants and natural enzymes.',
    price: 1100,
    currency: 'PKR',
    image: 'https://images.unsplash.com/photo-1600182610361-4b4d6a7ff5a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'wildflower',
    weight: '500g',
    region: 'Swat Valley',
    inStock: true,
    featured: true,
    isNew: false,
    rating: 4.8,
    labTested: true,
    seasonal: true,
    availabilityPeriod: 'May - July',
    properties: {
      color: 'Dark Gold',
      texture: 'Crystallized',
      flavor: 'Bold and complex with herbal notes',
      pollen: 'Mixed mountain wildflowers'
    }
  },
  {
    name: 'Desert Sidr Reserve',
    description: 'Limited edition Sidr honey from the oldest trees in the Thar Desert. Extremely rare and prized for its medicinal value.',
    price: 3000,
    currency: 'PKR',
    image: 'https://images.unsplash.com/photo-1589827577276-3cd89e6c8159?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'sidr',
    weight: '250g',
    region: 'Thar Desert',
    inStock: true,
    featured: true,
    isNew: true,
    rating: 5.0,
    labTested: true,
    seasonal: true,
    availabilityPeriod: 'October - December',
    properties: {
      color: 'Deep Amber',
      texture: 'Thick',
      flavor: 'Intense and complex with caramel and woody notes',
      pollen: 'Ancient Sidr tree pollen'
    }
  },
  {
    name: 'Eucalyptus Honey',
    description: 'Distinctive honey with natural medicinal properties, collected from eucalyptus forests in Balochistan.',
    price: 950,
    currency: 'PKR',
    image: 'https://images.unsplash.com/photo-1595348020949-87cdfbb44174?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'specialty',
    weight: '500g',
    region: 'Balochistan',
    inStock: true,
    featured: false,
    isNew: false,
    rating: 4.7,
    labTested: true,
    seasonal: false,
    properties: {
      color: 'Light Amber',
      texture: 'Medium',
      flavor: 'Bold with menthol undertones',
      pollen: 'Eucalyptus pollen'
    }
  },
  {
    name: 'Summer Berry Blend',
    description: 'A delightful mix of honey collected from various berry plants in the northern regions. Perfect for breakfast.',
    price: 1200,
    currency: 'PKR',
    discountedPrice: 999,
    image: 'https://images.unsplash.com/photo-1558583055-d7ac00b1adca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'berry',
    weight: '500g',
    region: 'Northern Areas',
    inStock: true,
    featured: true,
    isNew: true,
    rating: 4.8,
    labTested: true,
    seasonal: true,
    availabilityPeriod: 'June - August',
    properties: {
      color: 'Ruby Red',
      texture: 'Smooth',
      flavor: 'Sweet and fruity with berry undertones',
      pollen: 'Mixed berry pollen'
    }
  }
];

const addMoreProducts = async () => {
  try {
    console.log('Starting to add products...');
    
    for (const product of additionalProducts) {
      await productService.addProduct(product);
      console.log(`Added product: ${product.name}`);
    }
    
    console.log('All products added successfully!');
  } catch (error) {
    console.error('Error adding products:', error);
  }
};

// Execute the function
addMoreProducts(); 