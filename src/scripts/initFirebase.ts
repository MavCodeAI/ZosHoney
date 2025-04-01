import { db } from '../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { products } from '../data/products';

const initializeFirebase = async () => {
  try {
    // Get reference to products collection
    const productsCollection = collection(db, 'products');
    
    // Add each product to Firebase
    for (const product of products) {
      await addDoc(productsCollection, {
        name: product.name,
        description: product.description,
        price: product.price,
        currency: product.currency,
        discountedPrice: product.discountedPrice,
        image: product.image,
        category: product.category,
        weight: product.weight,
        region: product.region,
        inStock: product.inStock,
        featured: product.featured,
        isNew: product.isNew,
        rating: product.rating,
        labTested: product.labTested,
        seasonal: product.seasonal,
        availabilityPeriod: product.availabilityPeriod,
        properties: product.properties
      });
      console.log(`Added product: ${product.name}`);
    }
    
    console.log('All products have been added to Firebase!');
  } catch (error) {
    console.error('Error adding products to Firebase:', error);
  }
};

// Run the initialization
initializeFirebase(); 