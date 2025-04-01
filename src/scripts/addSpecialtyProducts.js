import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBxGXe6aqY_oOtXqy0qKP_j7Hfl7QRzGFs",
  authDomain: "zos-honey.firebaseapp.com",
  projectId: "zos-honey",
  storageBucket: "zos-honey.appspot.com",
  messagingSenderId: "1078346698844",
  appId: "1:1078346698844:web:a3d95f0f7d5a340c6f9c58",
  measurementId: "G-XFXF8SMNQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const specialtyProducts = [
  {
    name: 'Premium Himalayan Shilajit',
    description: 'Pure and authentic Himalayan Shilajit, known for its rich mineral content and traditional health benefits. Carefully sourced from high-altitude regions.',
    price: 3500,
    currency: 'PKR',
    image: 'https://images.unsplash.com/photo-1612016319483-a56641dba2c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'shilajit',
    weight: '100g',
    region: 'Himalayan Range',
    inStock: true,
    featured: true,
    isNew: true,
    rating: 4.9,
    labTested: true,
    seasonal: false,
    properties: {
      color: 'Deep Black',
      texture: 'Resinous',
      purity: '100% Pure',
      source: 'High-altitude Himalayan rocks',
      minerals: 'Rich in fulvic acid and minerals'
    }
  },
  {
    name: 'Gold Grade Shilajit Resin',
    description: 'Premium grade Shilajit resin with high fulvic acid content. Traditional Ayurvedic supplement known for its rejuvenating properties.',
    price: 4200,
    currency: 'PKR',
    image: 'https://images.unsplash.com/photo-1573483587794-5ab6e5e9973d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'shilajit',
    weight: '50g',
    region: 'Nepal Himalayas',
    inStock: true,
    featured: true,
    isNew: false,
    rating: 5.0,
    labTested: true,
    seasonal: false,
    properties: {
      color: 'Jet Black',
      texture: 'Smooth Resin',
      purity: 'Gold Grade',
      source: 'Nepal Himalayan rocks',
      minerals: 'High concentration of fulvic acid'
    }
  },
  {
    name: 'Premium Kashmir Saffron',
    description: 'Highest grade Kashmiri saffron threads, known for their intense aroma and rich color. Perfect for culinary and medicinal uses.',
    price: 5500,
    currency: 'PKR',
    image: 'https://images.unsplash.com/photo-1584620293691-888bef708c85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'saffron',
    weight: '10g',
    region: 'Kashmir Valley',
    inStock: true,
    featured: true,
    isNew: true,
    rating: 5.0,
    labTested: true,
    seasonal: true,
    availabilityPeriod: 'October - November',
    properties: {
      color: 'Deep Red',
      aroma: 'Intense and fragrant',
      grade: 'Grade 1+ Premium',
      origin: 'Kashmir Valley',
      quality: 'ISO 3632 Category I'
    }
  },
  {
    name: 'Iranian Royal Saffron',
    description: 'Exceptional quality Iranian saffron, featuring long, bright red threads with intense flavor and aroma. Sourced from the finest saffron fields.',
    price: 4800,
    currency: 'PKR',
    image: 'https://images.unsplash.com/photo-1573484888914-strawberries?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'saffron',
    weight: '5g',
    region: 'Imported',
    inStock: true,
    featured: false,
    isNew: true,
    rating: 4.8,
    labTested: true,
    seasonal: true,
    availabilityPeriod: 'September - December',
    properties: {
      color: 'Bright Red',
      aroma: 'Rich and complex',
      grade: 'Super Negin',
      origin: 'Iran',
      quality: 'Premium Grade'
    }
  },
  {
    name: 'Organic Herbal Blend',
    description: 'A carefully curated blend of traditional medicinal herbs, including tulsi, ashwagandha, and other beneficial herbs.',
    price: 1200,
    currency: 'PKR',
    image: 'https://images.unsplash.com/photo-1515689917524-22c66c00a5cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'herbs',
    weight: '100g',
    region: 'Various',
    inStock: true,
    featured: true,
    isNew: true,
    rating: 4.7,
    labTested: true,
    seasonal: false,
    properties: {
      ingredients: 'Tulsi, Ashwagandha, Brahmi',
      benefits: 'Stress relief, immunity boost',
      certification: 'Organic certified',
      usage: 'Can be used as tea or supplement'
    }
  },
  {
    name: 'Mountain Herbs Collection',
    description: 'A selection of rare mountain herbs known for their medicinal properties, carefully harvested from high-altitude regions.',
    price: 1500,
    currency: 'PKR',
    image: 'https://images.unsplash.com/photo-1544404709-235a6d8b8c4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'herbs',
    weight: '75g',
    region: 'Northern Areas',
    inStock: true,
    featured: false,
    isNew: true,
    rating: 4.6,
    labTested: true,
    seasonal: true,
    availabilityPeriod: 'June - September',
    properties: {
      ingredients: 'Various mountain herbs',
      benefits: 'Natural healing and wellness',
      source: 'High-altitude regions',
      usage: 'Traditional medicinal uses'
    }
  }
];

async function addSpecialtyProducts() {
  try {
    console.log('Starting to add specialty products...');
    
    for (const product of specialtyProducts) {
      const docRef = await addDoc(collection(db, 'products'), product);
      console.log(`Added product: ${product.name} with ID: ${docRef.id}`);
    }
    
    console.log('All specialty products added successfully!');
  } catch (error) {
    console.error('Error adding specialty products:', error);
  }
}

// Execute the function
addSpecialtyProducts(); 