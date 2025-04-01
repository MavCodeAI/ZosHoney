import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  where,
  getDoc,
  DocumentData,
  Query,
  CollectionReference
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Product, ProductFilter } from '../types/product';

const COLLECTION_NAME = 'products';

export const productService = {
  // Get all products
  getAllProducts: async (): Promise<Product[]> => {
    try {
      const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
      const products = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Product[];
      
      console.log('Fetched products:', products); // Add debug log
      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  // Get product by ID
  getProductById: async (id: string): Promise<Product | null> => {
    const docRef = doc(db, COLLECTION_NAME, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Product;
    }
    return null;
  },

  // Add new product
  addProduct: async (product: Omit<Product, 'id'>): Promise<Product> => {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), product);
    return {
      id: docRef.id,
      ...product
    };
  },

  // Update product
  updateProduct: async (id: string, product: Partial<Product>): Promise<void> => {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, product);
  },

  // Delete product
  deleteProduct: async (id: string): Promise<void> => {
    const docRef = doc(db, COLLECTION_NAME, id);
    await deleteDoc(docRef);
  },

  // Filter products
  filterProducts: async (filters: ProductFilter): Promise<Product[]> => {
    let productsQuery: Query<DocumentData> = collection(db, COLLECTION_NAME);
    
    if (filters.category) {
      productsQuery = query(productsQuery, where('category', '==', filters.category));
    }
    
    if (filters.region) {
      productsQuery = query(productsQuery, where('region', '==', filters.region));
    }
    
    if (filters.labTested !== undefined) {
      productsQuery = query(productsQuery, where('labTested', '==', filters.labTested));
    }
    
    if (filters.seasonal !== undefined) {
      productsQuery = query(productsQuery, where('seasonal', '==', filters.seasonal));
    }

    const querySnapshot = await getDocs(productsQuery);
    let products = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Product[];

    // Apply price range filter in memory
    if (filters.priceRange) {
      products = products.filter(product => {
        const price = product.discountedPrice || product.price;
        return price >= filters.priceRange!.min && price <= filters.priceRange!.max;
      });
    }

    return products;
  },

  async getProducts(): Promise<Product[]> {
    try {
      const productsRef = collection(db, 'products');
      const snapshot = await getDocs(productsRef);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Product[];
    } catch (error) {
      console.error('Error getting products:', error);
      throw error;
    }
  }
}; 