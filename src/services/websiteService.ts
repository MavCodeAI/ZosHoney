import { db } from '../lib/firebase';
import { doc, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, getDocs } from 'firebase/firestore';
import { WebsiteSettings, BlogPost } from '../types/website';

export const websiteService = {
  // Get website settings
  getSettings: async (): Promise<WebsiteSettings> => {
    try {
      const settingsRef = doc(db, 'settings', 'website');
      const snapshot = await getDoc(settingsRef);
      return snapshot.data() as WebsiteSettings;
    } catch (error) {
      console.error('Error getting settings:', error);
      throw error;
    }
  },

  // Update website settings
  updateSettings: async (settings: WebsiteSettings): Promise<boolean> => {
    try {
      const settingsRef = doc(db, 'settings', 'website');
      await setDoc(settingsRef, settings);
      return true;
    } catch (error) {
      console.error('Error updating settings:', error);
      throw error;
    }
  },

  // Blog posts management
  createBlogPost: async (post: Omit<BlogPost, 'id'>): Promise<BlogPost> => {
    const docRef = await addDoc(collection(db, 'blog'), post);
    return { id: docRef.id, ...post };
  },

  updateBlogPost: async (id: string, post: Partial<BlogPost>): Promise<void> => {
    const docRef = doc(db, 'blog', id);
    await updateDoc(docRef, post);
  },

  deleteBlogPost: async (id: string): Promise<void> => {
    const docRef = doc(db, 'blog', id);
    await deleteDoc(docRef);
  },

  getBlogPosts: async (): Promise<BlogPost[]> => {
    const querySnapshot = await getDocs(collection(db, 'blog'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as BlogPost[];
  }
}; 